import { configDotenv } from "dotenv";
import mongoose from 'mongoose';

configDotenv()

const uri: string = process.env.MONGODB_URI || "";

let dbConnection: mongoose.Connection | null = null;

export const connectToServer = (callback: (err?: Error) => void) => {
  mongoose.connect(uri).then(() => {
    console.log('Connected to MongoDB by Mongoose');
    return callback();
  });
};

export const getDb = (): mongoose.Connection => {
  return dbConnection as mongoose.Connection;
};
