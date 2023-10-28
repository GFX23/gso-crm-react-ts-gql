import { Customer } from "../types/types";


interface Person {
  id: number;
  name: string;
}

interface Args {
  id: number;
  name: string;
}

const Resolvers = {
  Query: {
    getAllCustomers: (): Customer[] => customersArray,
    getCustomer: (_: any, args: { id: string }): Customer | null => {
      const foundCustomer = customersArray.find(
        (customer) => customer.id === args.id
      );
      return foundCustomer || null;
    },
  },
  Mutation: {
    addCustomer: (_: any, args: { input: Customer }): Customer => {
      const newCustomer: Customer = {
        id: (Math.max(
          ...customersArray.map((customer) => parseInt(customer.id))
        )+1).toString(),
        name: args.input.name,
        street: args.input.street,
        city: args.input.city,
        zipcode: args.input.zipcode,
        state: args.input.state,
        vatCode: args.input.vatCode,
        contactName: args.input.contactName,
        email: args.input.email,
        phone: args.input.phone,
        website: args.input.website,
      };
      customersArray.push(newCustomer);
      return newCustomer;
    },
  },
};
export default Resolvers;

let customersArray: Customer[] = [
  {
    id: "1",
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
    id: "2",
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
    id: "3",
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
    id: "4",
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
    id: "5",
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
    id: "6",
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
    id: "7",
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
    id: "8",
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
];
