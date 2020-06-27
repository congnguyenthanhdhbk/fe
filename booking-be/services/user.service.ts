import {Context, ServiceSchema} from "moleculer";
import jwt from "jsonwebtoken";

import DbService from "../mixins/db.mixin";

const UserService: ServiceSchema = {
    name: "user",
    mixins: [DbService("users")],
    settings: {
        /** Secret for JWT*/
        JWT_SECRET: process.env.JWT_SECRET || "jwt-booking-secret",
        /** Public fields */
        fields: [ "_id", "username", "email", "type", "subtype", "bio",
            "image", "company", "addresses", "settings", "dates"],
        /** Validator schema for entity */
        entityValidator: {
            username: { type: "string", min: 2, pattern: /^[a-zA-Z0-9]+$/},
            password: { type: "string", min: 8},
            type: { type: "string", optional: true },
            bio: { type: "string", optional: true },
            image: { type: "string", optional: true},
            dates: { type: "object", optional: true, props: {
                dateCreated: { type: "date", optional: true },
                dateLastLogin: { type: "date", optional: true},
                dateUpdated: { type: "date", optional: true },
                dateLastVerified: { type: "date", optional: true },
                dateActivated: { type: "date", optional: true },
                dateTobeErased: { type: "date", optional: true },
            }},
            company: { type: "object", optional: true, props: {
                name: { type: "string", optional: true },
                orgId: { type: "string", optional: true },
                taxId: { type: "string", optional: true },
                taxVatId: { type: "string", optional: true },
            }},
            addresses: { type: "array", optional: true, items:
                    { type: "object", props: {
                            // Invoice, delivery, ...
                            type: { type: "string" },
                            nameFirst: { type: "string", min: 3 },
                            nameLast: { type: "string", min: 3 },
                            street: { type: "string", min: 5 },
                            street2: { type: "string", optional: true },
                            zip: { type: "string", min: 5 },
                            city: { type: "string", min: 5 },
                            state: { type: "string", optional: true },
                            country: { type: "string", min: 2 },
                            phone: { type: "string", min: 2 },
                        } },
            },
            ip: { type: "object", optional: true, props: {
                    ipRegistration: { type: "string", optional: true },
                    ipLastLogin: { type: "string", optional: true },
                } },
            settings: { type: "object", optional: true, props: {
                    language: { type: "string", optional: true },
                    currency: { type: "string", optional: true },
                } },
        },
    },
    dependencies: {},
    actions: {},
    events: {},
    methods: {
        generateJWT(user, ctx) {
            const today = new Date();
            const exp = new Date(today);
            exp.setDate(today.getDate() + 60);
            const genereatedJwt = jwt.sign({
                id: user._id,
                username: user.username,
                exp: Math.floor(exp.getTime() / 1000),
            }, this.settings.JWT_SECRET);

            if (ctx.meta.cookies) {
                if (!ctx.meta.makeCookies) {
                    ctx.meta.makeCookies = {};
                }

                ctx.meta.makeCookies.token = {
                    value: genereatedJwt,
                    options: {
                        path: "/",
                        signed: true,
                        expires: exp,
                        secure: ((process.env.COOKIES_SECURE && process.env.COOKIES_SECURE === true)),
                        httpOnly: true,
                    },
                };
                if (process.env.COOKIES_SAME_SITE) {
                    ctx.meta.makeCookies.token.options.sameSite = process.env.COOKIES_SAME_SITE;
                }
            }
            return genereatedJwt;
        },
        transformEntity(user, withToken, ctx) {
            if (user) {
                user.image = user.image || "";

                if (withToken) {
                    ctx.meta.token = this.generateJWT(user, ctx);
                }
            }

            return { user };
        },
        transformProfile(ctx, user, loggedInUser) {
            user.img = user.img || "";
            if (loggedInUser) {
                return ctx.call("follows.has", { user: loggedInUser._id.toString(), follow: user._id.toString()})
                    .then(res => {
                        user.following = res;
                        return { profile: user };
                    });
            }
        },
        userCanUpdate(loggedUser, userUpdate) {
            this.logger.info("users.userCanUpdate params: ", {
                loggedUser,
                userUpdate,
            });

            // Chek it loggedUser data has _id
            if (loggedUser && loggedUser._id && loggedUser._id.toString().trim() !== "'") {
                // If loggedUser is admin and userUpdate data contain _id of user to update - can update any user
                if (loggedUser.type === "admin" && userUpdate._id && userUpdate._id.toString().trim() !== "") {
                    return true;
                }

                // If loggedUser is admin but userUpdate has no _id - update himself
                if (loggedUser.type === "admin" && !userUpdate._id) {
                    return true;
                }

                // If loggedUser is not admin - update himself
                if (loggedUser.type !== "admin" && !userUpdate._id) {
                    return true;
                }
            }

            return false;
        },

        mergeTwoAddress(addressOrg, addressNew) {
            let resultAddress = addressOrg;

            if (addressNew) {
                for (let property in addressNew) {
                    if (Object.prototype.hasOwnProperty.call(resultAddress, property)
                        && Object.prototype.hasOwnProperty.call(addressNew, property)) {
                        resultAddress[property] = addressNew[property];
                    }
                }
            }

            return resultAddress;
        },
        extractTranslation: function (transData, langCode, blockName) {
            let extractedTranslation = []; // { type: "text", selector: "...", string:   }
            if (transData && transData.dictionary && transData.dictionary.records &&
                transData.dictionary.records.length > 0 && langCode) {
                for (let i = 0; i < transData.dictionary.records.length; i++) {
                    let translationRecordString = "";
                    // #1 - get translate with same langCode
                    for (let j = 0; j < transData.dictionary.records[i].translates.length; j++) {
                        if (transData.dictionary.records[i].translates[j].langCode === langCode) {
                            // GET translation string
                            translationRecordString = transData.dictionary.records[i].translates[j].translation;
                        } // END if translates langCode
                    } // END for traslates
                    // #2 - get types and selectors from occurences
                    for (let j = 0; j < transData.dictionary.records[i].occurrences.length; j++) {
                        // TODO - if blockName set, select only specific block
                        if (transData.dictionary.records[i].occurrences[j].type) {
                            if ((typeof blockName !== "undefined" && blockName != "" &&
                                transData.dictionary.records[i].occurrences[j].blockName &&
                                transData.dictionary.records[i].occurrences[j].blockName == blockName) ||
                                typeof blockName === "undefined") {
                                // GET translation TYPE
                                let translationRecordType = transData.dictionary.records[i].occurrences[j].type;
                                if (transData.dictionary.records[i].occurrences[j].translationStrings &&
                                    transData.dictionary.records[i].occurrences[j].translationStrings.length) {
                                    for (let k = 0; k < transData.dictionary
                                        .records[i].occurrences[j].translationStrings.length; k++) {
                                        let translationRecordSelector = transData.dictionary
                                            .records[i].occurrences[j].translationStrings[k].selector;
                                        let translationRecordOrig = transData.dictionary
                                            .records[i].occurrences[j].translationStrings[k].stringOrig;
                                        extractedTranslation.push({
                                            type: translationRecordType,
                                            selector: translationRecordSelector,
                                            string: translationRecordString,
                                            original: translationRecordOrig,
                                        });
                                    } // END for translationStrings
                                } // END if translationStrings
                            } // END if blockName
                        } // END if type
                    } // END for occurrences
                }
            }
            const result = {};
            // @ts-ignore
            result[langCode] = extractedTranslation;
            return result;
        },
    },
};
