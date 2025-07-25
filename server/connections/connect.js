const { MongoClient, ServerApiVersion } = require("mongodb");

require('dotenv').config()

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(process.env.MONGO_URL,  {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    }
);

let database;

module.exports = {
    connectToServer: () => {
        database = client.db('chattie_db');
    },
    getDb: () => {
        return database;
    }
}