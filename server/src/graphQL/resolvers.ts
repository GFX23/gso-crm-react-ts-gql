import type { Order, OrderInput, Customer } from "../types/types";
import { getDb } from "../mongobase/mongoDB";
import { CustomerModel } from "../mongobase/models";

const db = getDb();

const Resolvers = {
  Query: {
    //getAllCustomers: (): Customer[] => customersArray,
    getAllCustomers: async (): Promise<Customer[]> => await CustomerModel.find({}),
    getCustomer: (_: any, args: { id: string }): Customer | null => {
      const foundCustomer = customersArray.find(
        (customer) => customer.id === args.id
      );
      return foundCustomer || null;
    },
    getAllOrders: (): Order[] => orders,
  },
  Mutation: {
    addCustomer: (_: any, args: { input: Customer }): Customer => {
      const newCustomer: Customer = {
        id: (
          Math.max(...customersArray.map((customer) => parseInt(customer.id))) +
          1
        ).toString(),
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
    updateOrderDate: (_: any, args: { id: string, date: string, until: string }): Order | null => {
      const foundOrder = orders.find((order) => order.id === args.id);
      if (foundOrder) {
        foundOrder.machining.date = args.date;
        foundOrder.machining.until = args.until;
      }
      // Update orders array with updated order
      orders = orders.map((order) => {
        if (order.id === args.id && foundOrder) {
          return foundOrder;
        }
        return order;
      });
      return foundOrder || null;
    },
    addOrder: (_: any, args: { input: OrderInput}): Order => {
      const newOrder: Order = {
        id: (
          Math.max(...orders.map((order) => parseInt(order.id))) + 1
        ).toString(),
        name: args.input.name,
        customer: args.input.customer,
        delivery: args.input.delivery,
        status: "active",
        price: args.input.price,
        machining: {date: args.input.machiningDate, until: args.input.machiningUntil},
        operations: [
          {
            type: "welding",
            state: args.input.welding,
            date: args.input.weldingDate,
          },
          {
            type: "heatTreat",
            state: args.input.heatTreat,
            date: args.input.heatTreatDate,
          },
          {
            type: "grinding",
            state: args.input.grinding,
            date: args.input.grindingDate,
          },
          {
            type: "assembly",
            state: args.input.assembly,
            date: args.input.assemblyDate,
          },
          {
            type: "packaging",
            state: args.input.packaging,
            date: args.input.packagingDate,
          },
          {
            type: "shipping",
            state: args.input.shipping,
            date: args.input.shippingDate,
          },
        ],
        items: [{
          id: "1-1",
          name: "High-Performance Laptop",
          status: "In Stock",
          price: "1000",
          quantity: "1",
        }],
      };
      orders.push(newOrder);
      return newOrder;
    },
    deleteCustomer: (_: any, args: { id: string }): Customer | null => {
      const foundCustomer = customersArray.find(
        (customer) => customer.id === args.id
      );
      if (foundCustomer) {
        customersArray = customersArray.filter(
          (customer) => customer.id !== args.id
        );
      }
      return foundCustomer || null;
    },
    deleteOrder: (_: any, args: { id: string }): Order | null => {
      const foundOrder = orders.find((order) => order.id === args.id);
      if (foundOrder) {
        orders = orders.filter((order) => order.id !== args.id);
      }
      return foundOrder || null;
    },
  },
};
export default Resolvers;

export let customersArray: Customer[] = [
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

export let orders: Order[] = [
  {
    id: "1",
    name: "GSO-23-079 - ELEDI Pelton",
    customer: "Eledi Tech s.r.l.",
    delivery: "2023-10-27",
    status: "Active",
    price: "65000",
    machining: {date: "2023-11-16", until: "2023-11-27"},
    operations: [
      { type: "welding", state: false, date: "2023-10-28" },
      { type: "heatTreat", state: false, date: "2023-10-29" },
      { type: "grinding", state: true, date: "2023-10-30" },
      { type: "assembly", state: true, date: "2023-11-01" },
      { type: "packaging", state: true, date: "2023-11-02" },
      { type: "shipping", state: true, date: "2023-11-03" },
    ],
    items: [
      {
        id: "1-1",
        name: "Peltonka",
        status: "Active",
        price: "65000",
        quantity: "1",
      },
      {
        id: "1-1",
        name: "Peltonka",
        status: "Active",
        price: "65000",
        quantity: "1",
      },
      {
        id: "1-1",
        name: "Peltonka",
        status: "Active",
        price: "65000",
        quantity: "1",
      },
      {
        id: "1-1",
        name: "Peltonka",
        status: "Active",
        price: "65000",
        quantity: "1",
      },
      {
        id: "1-1",
        name: "Peltonka",
        status: "Active",
        price: "65000",
        quantity: "1",
      },
    ],
  },
  {
    id: "2",
    name: "GSO-23-080 -  TS INDUSTRY Francis",
    customer: "TS INDUSTRY s.r.o.",
    delivery: "2023-10-28",
    status: "Active",
    price: "45000",
    machining: {date: "2023-11-06", until: "2023-11-17"},
    operations: [
      { type: "welding", state: false, date: "2023-10-29" },
      { type: "heatTreat", state: false, date: "2023-10-30" },
      { type: "grinding", state: true, date: "2023-10-31" },
      { type: "assembly", state: false, date: "2023-11-02" },
      { type: "packaging", state: true, date: "2023-11-03" },
      { type: "shipping", state: false, date: "2023-11-04" },
    ],
    items: [
      {
        id: "2-1",
        name: "Francis Runner",
        status: "In Stock",
        price: "22000",
        quantity: "1",
      },
      {
        id: "2-2",
        name: "Francis Runner",
        status: "In Stock",
        price: "23000",
        quantity: "1",
      },
    ],
  },
  {
    id: "3",
    name: "GSO-23-081 - ANDRITZ Hydro Francis",
    customer: "ANDRITZ HYDRO s.r.o.",
    delivery: "2023-10-29",
    status: "Active",
    price: "1500",
    machining: {date: "2023-11-06", until: "2023-11-08"},
    operations: [
      { type: "welding", state: false, date: "2023-10-30" },
      { type: "heatTreat", state: false, date: "2023-10-31" },
      { type: "grinding", state: false, date: "2023-11-01" },
      { type: "assembly", state: true, date: "2023-11-03" },
      { type: "packaging", state: false, date: "2023-11-04" },
      { type: "shipping", state: true, date: "2023-11-05" },
    ],
    items: [
      {
        id: "3-1",
        name: "Professional Camera",
        status: "In Stock",
        price: "1200",
        quantity: "1",
      },
      {
        id: "3-2",
        name: "Lens Kit",
        status: "In Stock",
        price: "300",
        quantity: "1",
      },
    ],
  },
  {
    id: "4",
    name: "GSO-23-082 - VOITH Hydro Francis",
    customer: "VOITH HYDRO s.r.o.",
    delivery: "2023-10-30",
    status: "Active",
    price: "2000",
    machining: {date: "2023-11-22", until: "2023-11-27"},
    operations: [
      { type: "welding", state: false, date: "2023-10-31" },
      { type: "heatTreat", state: false, date: "2023-11-01" },
      { type: "grinding", state: true, date: "2023-11-02" },
      { type: "assembly", state: false, date: "2023-11-04" },
      { type: "packaging", state: false, date: "2023-11-05" },
      { type: "shipping", state: true, date: "2023-11-06" },
    ],
    items: [
      {
        id: "4-1",
        name: "High-End Gaming PC",
        status: "In Stock",
        price: "1800",
        quantity: "1",
      },
      {
        id: "4-2",
        name: "Gaming Accessories",
        status: "In Stock",
        price: "200",
        quantity: "1",
      },
    ],
  },
  {
    id: "5",
    name: "GSO-23-083 - VOITH Hydro Francis",
    customer: "VOITH HYDRO s.r.o.",
    delivery: "2023-10-31",
    status: "Active",
    price: "500",
    machining: {date: "2023-11-12", until: "2023-11-19"},
    operations: [
      { type: "welding", state: true, date: "2023-11-01" },
      { type: "heatTreat", state: false, date: "2023-11-02" },
      { type: "grinding", state: false, date: "2023-11-03" },
      { type: "assembly", state: false, date: "2023-11-05" },
      { type: "packaging", state: false, date: "2023-11-06" },
      { type: "shipping", state: true, date: "2023-11-07" },
    ],
    items: [
      {
        id: "5-1",
        name: "Home Gym Set",
        status: "In Stock",
        price: "400",
        quantity: "1",
      },
      {
        id: "5-2",
        name: "Fitness Tracker",
        status: "In Stock",
        price: "100",
        quantity: "1",
      },
    ],
  },
  {
    id: "6",
    name: "GSO-23-084 - HPP Francis",
    customer: "HPP Hydro s.r.o.",
    delivery: "2023-11-01",
    status: "Active",
    price: "900",
    machining: {date: "2023-11-02", until: "2023-11-08"},
    operations: [
      { type: "welding", state: false, date: "2023-11-02" },
      { type: "heatTreat", state: false, date: "2023-11-03" },
      { type: "grinding", state: false, date: "2023-11-04" },
      { type: "assembly", state: false, date: "2023-11-06" },
      { type: "packaging", state: false, date: "2023-11-07" },
      { type: "shipping", state: true, date: "2023-11-08" },
    ],
    items: [
      {
        id: "6-1",
        name: "High-End Headphones",
        status: "In Stock",
        price: "800",
        quantity: "1",
      },
      {
        id: "6-2",
        name: "Bluetooth Speakers",
        status: "In Stock",
        price: "100",
        quantity: "1",
      },
    ],
  },
  {
    id: "7",
    name: "GSO-23-085 - MAGNA Přípravek",
    customer: "MAGNA Interior s.r.o.",
    delivery: "2023-11-02",
    status: "Active",
    price: "700",
    machining: {date: "2023-11-20", until: "2023-11-29"},
    operations: [
      { type: "welding", state: false, date: "2023-11-03" },
      { type: "heatTreat", state: false, date: "2023-11-04" },
      { type: "grinding", state: false, date: "2023-11-05" },
      { type: "assembly", state: false, date: "2023-11-07" },
      { type: "packaging", state: false, date: "2023-11-08" },
      { type: "shipping", state: true, date: "2023-11-09" },
    ],
    items: [
      {
        id: "7-1",
        name: "Modern Furniture Set",
        status: "In Stock",
        price: "600",
        quantity: "1",
      },
      {
        id: "7-2",
        name: "Decorative Art Pieces",
        status: "In Stock",
        price: "100",
        quantity: "1",
      },
    ],
  },
];
