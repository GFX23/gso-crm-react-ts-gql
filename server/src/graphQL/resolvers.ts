import type { Order, OrderInput, Customer } from "../types/types";

const Resolvers = {
  Query: {
    getAllCustomers: (): Customer[] => customersArray,
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
        operations: [
          {
            type: "machining",
            state: args.input.machining,
            date: args.input.machiningDate,
          },
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
    name: "Laptop Order",
    customer: "Tech Store",
    delivery: "2023-10-27",
    status: "Active",
    price: "1200",
    operations: [
      { type: "machining", state: true, date: "2023-10-27" },
      { type: "welding", state: false, date: "2023-10-28" },
      { type: "heatTreat", state: true, date: "2023-10-29" },
      { type: "grinding", state: false, date: "2023-10-30" },
      { type: "assembly", state: true, date: "2023-11-01" },
      { type: "packaging", state: true, date: "2023-11-02" },
      { type: "shipping", state: true, date: "2023-11-03" },
    ],
    items: [
      {
        id: "1-1",
        name: "High-Performance Laptop",
        status: "In Stock",
        price: "1000",
        quantity: "1",
      },
      {
        id: "1-2",
        name: "Accessories Bundle",
        status: "In Stock",
        price: "200",
        quantity: "1",
      },
    ],
  },
  {
    id: "2",
    name: "Smartphone Order",
    customer: "Gadget Emporium",
    delivery: "2023-10-28",
    status: "Active",
    price: "800",
    operations: [
      { type: "machining", state: true, date: "2023-10-28" },
      { type: "welding", state: false, date: "2023-10-29" },
      { type: "heatTreat", state: false, date: "2023-10-30" },
      { type: "grinding", state: false, date: "2023-10-31" },
      { type: "assembly", state: false, date: "2023-11-02" },
      { type: "packaging", state: true, date: "2023-11-03" },
      { type: "shipping", state: false, date: "2023-11-04" },
    ],
    items: [
      {
        id: "2-1",
        name: "Flagship Smartphone",
        status: "In Stock",
        price: "700",
        quantity: "1",
      },
      {
        id: "2-2",
        name: "Protection Plan",
        status: "In Stock",
        price: "100",
        quantity: "1",
      },
    ],
  },
  {
    id: "3",
    name: "Camera Order",
    customer: "Photo Pros",
    delivery: "2023-10-29",
    status: "Active",
    price: "1500",
    operations: [
      { type: "machining", state: true, date: "2023-10-29" },
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
    name: "Gaming PC Order",
    customer: "Game Haven",
    delivery: "2023-10-30",
    status: "Active",
    price: "2000",
    operations: [
      { type: "machining", state: true, date: "2023-10-30" },
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
    name: "Fitness Equipment Order",
    customer: "Fit Gear",
    delivery: "2023-10-31",
    status: "Active",
    price: "500",
    operations: [
      { type: "machining", state: true, date: "2023-10-31" },
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
    name: "Audio Equipment Order",
    customer: "Sound Wave",
    delivery: "2023-11-01",
    status: "Active",
    price: "900",
    operations: [
      { type: "machining", state: true, date: "2023-11-01" },
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
    name: "Home Decor Order",
    customer: "Interior Designs",
    delivery: "2023-11-02",
    status: "Active",
    price: "700",
    operations: [
      { type: "machining", state: true, date: "2023-11-02" },
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
