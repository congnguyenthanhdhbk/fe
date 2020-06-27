import mongoose, { Schema, Document } from "mongoose";

export interface User {
    firstName: string;
    lastName: string;
    email: string;
    emailVerified: boolean;
    emailVerifiedToken: string;
    phone: string;
    phoneVerified: boolean;
    phoneOtpNumber: number;
    phoneOtpExpiredAt: Date;
    avatar: string;
    password: string;
    passwordResetToken: string;
    resetTokenExpiredAt: Date;
    active: boolean;
    accountType: string;
    organization: any;
    billingAddress: string;
    shippingAddress: string;
    role: string;
    permission: any;
    createdAt: Date;
    updatedAt: Date;
}

const UserSchema: Schema = new Schema<any>({
    // eslint-disable-next-line id-blacklist
    firstName: { type: String, default: "",required:true},
    // eslint-disable-next-line id-blacklist
    lastName: { type: String,default: "", required:true},
    // eslint-disable-next-line id-blacklist
    email:  { type: String, unique: true, required: true, index: true},
    // eslint-disable-next-line id-blacklist
    emailVerified :{ type: Boolean, default:false},
    // eslint-disable-next-line id-blacklist
    emailVerifyToken: { type: String, default:null},
    // eslint-disable-next-line id-blacklist
    phone:  { type: String, default: ""},
    // eslint-disable-next-line id-blacklist
    phoneVerified : {type: Boolean,default:false},
    // eslint-disable-next-line id-blacklist
    phoneOtpNumber: {type:Number,default:null},
    phoneOtpExpiredAt: { type: Date,default:null},
    // eslint-disable-next-line id-blacklist
    avatar:  { type: String, default: ""},
    // eslint-disable-next-line id-blacklist
    password: { type: String, required: true},
    // eslint-disable-next-line id-blacklist
    passwordResetToken: {type: String, default: null},
    resetTokenExpiredAt: { type: Date, default: null},
    // eslint-disable-next-line id-blacklist
    active: { type: Boolean, default: true},
    // eslint-disable-next-line id-blacklist
    accountType: { type: String, enum: ["single", "organization"], default: "single" },
    organization: {type: Schema.Types.Mixed, default: {} },
    // eslint-disable-next-line id-blacklist
    billingAddress: { type: String, default: ""},
    // eslint-disable-next-line id-blacklist
    shippingAddress: { type: String, default: ""},
    // eslint-disable-next-line id-blacklist
    role: { type: String, enum: ["admin", "user"], default: "user" },
    permission: [
        {
            type: {  type: Schema.Types.ObjectId, ref: "permissionType", required: true  },
            // eslint-disable-next-line id-blacklist
            read: { type: Boolean, default: false, required: true  },
            // eslint-disable-next-line id-blacklist
            write: { type: Boolean, default: false, required: true },
            // eslint-disable-next-line id-blacklist
            delete: { type: Boolean, default: false, required: true },
        },
    ],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
})
