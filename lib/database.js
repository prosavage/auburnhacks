const { MongoClient, Db } = require("mongodb");
const url = process.env.MONGODB_URL;
const mongodb = require("mongodb").MongoClient;

export const connectoToMongoDB = async () => {
  const connectedClient = await MongoClient.connect(url, {
    useUnifiedTopology: true,
  });
  return connectedClient.db("auburnhacks");
};
