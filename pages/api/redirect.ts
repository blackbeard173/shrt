import { MongoClient, ObjectID } from "mongodb";
import { NowRequest, NowResponse } from "@vercel/node";

let cachedDb;

// MONGO DB CONNECTION URI
const MONGODB_URI=""

async function connectToDatabase() {
    if (cachedDb) {
        return cachedDb;
    }
    const client = new MongoClient(MONGODB_URI, {
        useNewUrlParser: true,
    });

    cachedDb = client;
    return await client.connect();
}

export default async (req: NowRequest, res: NowResponse) => {
    const db = await connectToDatabase();

    const entry = await db
        .db("links_db")
        .collection("links_collection")
        .findOne({ _id: new ObjectID(req.query.id as string) });

    if (entry !== null) {
        return res.redirect(301, entry.link);
    }

    return res.redirect(301, "/");
};
