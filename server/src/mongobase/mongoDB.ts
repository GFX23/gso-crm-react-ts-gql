import { configDotenv } from "dotenv";
import mongoose from 'mongoose';
import { CustomerModel } from "./models";

configDotenv()

const uri: string = process.env.MONGODB_URI || "";

let dbConnection: mongoose.Connection | null = null;

export const connectToServer = (callback: (err?: Error) => void) => {
  mongoose.connect(uri).then(() => {
    console.log('Connected to MongoDB by Mongoose');
    /*CustomerModel.insertMany([
      {
        name: "Acme Corporation",
        street: "123 Main St",
        city: "Cityville",
        zipcode: "10001",
        state: "CA",
        vatCode: "VAT123",
        contactName: "John Doe",
        email: "john.doe@example.com",
        phone: "123-456-7890",
        website: "www.acmecorp.com",
      },
      {
        name: "Widget Co.",
        street: "456 Oak St",
        city: "Townsville",
        zipcode: "20002",
        state: "NY",
        vatCode: "VAT456",
        contactName: "Alice Johnson",
        email: "alice.johnson@example.com",
        phone: "987-654-3210",
        website: "www.widgetco.com",
      },
      {
        name: "Global Innovations",
        street: "789 Pine St",
        city: "Metropolis",
        zipcode: "30003",
        state: "TX",
        vatCode: "VAT789",
        contactName: "Bob Smith",
        email: "bob.smith@example.com",
        phone: "456-789-0123",
        website: "www.globalinnovations.com",
      },
      {
        name: "Tech Solutions Inc.",
        street: "101 Cedar St",
        city: "Techville",
        zipcode: "40004",
        state: "FL",
        vatCode: "VAT101",
        contactName: "Emma Davis",
        email: "emma.davis@example.com",
        phone: "789-012-3456",
        website: "www.techsolutions.com",
      },
      {
        name: "Fashion Trends Ltd.",
        street: "202 Maple St",
        city: "Styleville",
        zipcode: "50005",
        state: "GA",
        vatCode: "VAT202",
        contactName: "Sophia Turner",
        email: "sophia.turner@example.com",
        phone: "345-678-9012",
        website: "www.fashiontrends.com",
      },
      {
        name: "Nature's Bounty",
        street: "303 Elm St",
        city: "Greenland",
        zipcode: "60006",
        state: "CO",
        vatCode: "VAT303",
        contactName: "Andrew Green",
        email: "andrew.green@example.com",
        phone: "567-890-1234",
        website: "www.naturesbounty.com",
      },
      {
        name: "Dynamic Ventures",
        street: "404 Birch St",
        city: "Innovation City",
        zipcode: "70007",
        state: "WA",
        vatCode: "VAT404",
        contactName: "Linda Reed",
        email: "linda.reed@example.com",
        phone: "678-901-2345",
        website: "www.dynamicventures.com",
      },
      {
        name: "Epic Creations",
        street: "505 Pine St",
        city: "Creativityville",
        zipcode: "80008",
        state: "OR",
        vatCode: "VAT505",
        contactName: "David Epic",
        email: "david.epic@example.com",
        phone: "789-012-3456",
        website: "www.epiccreations.com",
      },
    ])*/
    return callback();
  });
};

export const getDb = (): mongoose.Connection => {
  return dbConnection as mongoose.Connection;
};
