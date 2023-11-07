import { MongoClient } from "mongodb";
import { configDotenv } from "dotenv";

configDotenv()

const uri: string = process.env.MONGODB_URI || "";

const client = new MongoClient(uri);

parseInt

export async function connectToDatabase() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
    const database = client.db("GSO-CRM");
    const collection = database.collection("CUSTOMERS");
    const customers = await collection.find({}).toArray();
    console.log(customers);
    return collection;
  } catch (error) {
    console.log(error);
  } finally {
     await client.close();
  }
}
