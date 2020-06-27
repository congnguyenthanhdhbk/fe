import DbService from "moleculer-db";
import MongooseAdapter from "moleculer-db-adapter-mongoose";

const dbMixin = (collection: string) => ({
        mixins: [DbService],
        adapter: new MongooseAdapter(process.env.MONGO_URI
            || "mongodb://localhost:27017/users", { useNewUrlParser: true }),
        collection,
        methods: {},
    });

export = dbMixin;
