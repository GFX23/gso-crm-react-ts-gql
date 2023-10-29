import { Order } from "../types/types";
import { Customer } from "../types/types";

export const customersArray: Customer[] = [
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


export const orders: Order[] = [
  {
    id: 'ORD-1',
    name: 'Order 1',
    customer: 'Customer 1',
    delivery: 'Delivery 1',
    status: 'Status 1',
    price: '100',
    operations: {
      machining: {
        state: true,
        date: '2021-08-01'
      },
      welding: {
        state: false,
        date: '2021-08-01'
      },
      heatTreat: {
        state: false,
        date: '2021-08-01'
      },
      grinding: {
        state: false,
        date: '2021-08-01'
      },
      painting: {
        state: false,
        date: '2021-08-01'
      },
      assembly: {
        state: false,
        date: '2021-08-01'
      },
      packaging: {
        state: false,
        date: '2021-08-01'
      },
      shipping: {
        state: false,
        date: '2021-08-01'
      }
    },
    items: [
      {
        id: 'ITEM-1-1',
        name: 'Item 1-1',
        status: 'Status 1-1',
        price: '10',
        quantity: '1'
      },
      {
        id: 'ITEM-1-2',
        name: 'Item 1-2',
        status: 'Status 1-2',
        price: '20',
        quantity: '1'
      }
    ]
  },
  {
    id: 'ORD-2',
    name: 'Order 2',
    customer: 'Customer 2',
    delivery: 'Delivery 2',
    status: 'Status 2',
    price: '200',
    operations: {
      machining: {
        state: true,
        date: '2021-08-02'
      },
      welding: {
        state: false,
        date: '2021-08-02'
      },
      heatTreat: {
        state: false,
        date: '2021-08-02'
      },
      grinding: {
        state: false,
        date: '2021-08-02'
      },
      painting: {
        state: false,
        date: '2021-08-02'
      },
      assembly: {
        state: false,
        date: '2021-08-02'
      },
      packaging: {
        state: false,
        date: '2021-08-02'
      },
      shipping: {
        state: false,
        date: '2021-08-02'
      }
    },
    items: [
      {
        id: 'ITEM-2-1',
        name: 'Item 2-1',
        status: 'Status 2-1',
        price: '20',
        quantity: '2'
      },
      {
        id: 'ITEM-2-2',
        name: 'Item 2-2',
        status: 'Status 2-2',
        price: '40',
        quantity: '2'
      }
    ]
  },
  {
    id: 'ORD-3',
    name: 'Order 3',
    customer: 'Customer 3',
    delivery: 'Delivery 3',
    status: 'Status 3',
    price: '300',
    operations: {
      machining: {
        state: true,
        date: '2021-08-03'
      },
      welding: {
        state: false,
        date: '2021-08-03'
      },
      heatTreat: {
        state: false,
        date: '2021-08-03'
      },
      grinding: {
        state: false,
        date: '2021-08-03'
      },
      painting: {
        state: false,
        date: '2021-08-03'
      },
      assembly: {
        state: false,
        date: '2021-08-03'
      },
      packaging: {
        state: false,
        date: '2021-08-03'
      },
      shipping: {
        state: false,
        date: '2021-08-03'
      }
    },
    items: [
      {
        id: 'ITEM-3-1',
        name: 'Item 3-1',
        status: 'Status 3-1',
        price: '30',
        quantity: '3'
      },
      {
        id: 'ITEM-3-2',
        name: 'Item 3-2',
        status: 'Status 3-2',
        price: '60',
        quantity: '3'
      }
    ]
  },
  {
    id: 'ORD-4',
    name: 'Order 4',
    customer: 'Customer 4',
    delivery: 'Delivery 4',
    status: 'Status 4',
    price: '400',
    operations: {
      machining: {
        state: true,
        date: '2021-08-04'
      },
      welding: {
        state: false,
        date: '2021-08-04'
      },
      heatTreat: {
        state: false,
        date: '2021-08-04'
      },
      grinding: {
        state: false,
        date: '2021-08-04'
      },
      painting: {
        state: false,
        date: '2021-08-04'
      },
      assembly: {
        state: false,
        date: '2021-08-04'
      },
      packaging: {
        state: false,
        date: '2021-08-04'
      },
      shipping: {
        state: false,
        date: '2021-08-04'
      }
    },
    items: [
      {
        id: 'ITEM-4-1',
        name: 'Item 4-1',
        status: 'Status 4-1',
        price: '40',
        quantity: '4'
      },
      {
        id: 'ITEM-4-2',
        name: 'Item 4-2',
        status: 'Status 4-2',
        price: '80',
        quantity: '4'
      }
    ]
  },
  {
    id: 'ORD-5',
    name: 'Order 5',
    customer: 'Customer 5',
    delivery: 'Delivery 5',
    status: 'Status 5',
    price: '500',
    operations: {
      machining: {
        state: true,
        date: '2021-08-05'
      },
      welding: {
        state: false,
        date: '2021-08-05'
      },
      heatTreat: {
        state: false,
        date: '2021-08-05'
      },
      grinding: {
        state: false,
        date: '2021-08-05'
      },
      painting: {
        state: false,
        date: '2021-08-05'
      },
      assembly: {
        state: false,
        date: '2021-08-05'
      },
      packaging: {
        state: false,
        date: '2021-08-05'
      },
      shipping: {
        state: false,
        date: '2021-08-05'
      }
    },
    items: [
      {
        id: 'ITEM-5-1',
        name: 'Item 5-1',
        status: 'Status 5-1',
        price: '50',
        quantity: '5'
      },
      {
        id: 'ITEM-5-2',
        name: 'Item 5-2',
        status: 'Status 5-2',
        price: '100',
        quantity: '5'
      }
    ]
  },
  {
    id: 'ORD-6',
    name: 'Order 6',
    customer: 'Customer 6',
    delivery: 'Delivery 6',
    status: 'Status 6',
    price: '600',
    operations: {
      machining: {
        state: true,
        date: '2021-08-06'
      },
      welding: {
        state: false,
        date: '2021-08-06'
      },
      heatTreat: {
        state: false,
        date: '2021-08-06'
      },
      grinding: {
        state: false,
        date: '2021-08-06'
      },
      painting: {
        state: false,
        date: '2021-08-06'
      },
      assembly: {
        state: false,
        date: '2021-08-06'
      },
      packaging: {
        state: false,
        date: '2021-08-06'
      },
      shipping: {
        state: false,
        date: '2021-08-06'
      }
    },
    items: [
      {
        id: 'ITEM-6-1',
        name: 'Item 6-1',
        status: 'Status 6-1',
        price: '60',
        quantity: '6'
      },
      {
        id: 'ITEM-6-2',
        name: 'Item 6-2',
        status: 'Status 6-2',
        price: '120',
        quantity: '6'
      }
    ]
  },
  {
    id: 'ORD-7',
    name: 'Order 7',
    customer: 'Customer 7',
    delivery: 'Delivery 7',
    status: 'Status 7',
    price: '700',
    operations: {
      machining: {
        state: true,
        date: '2021-08-07'
      },
      welding: {
        state: false,
        date: '2021-08-07'
      },
      heatTreat: {
        state: false,
        date: '2021-08-07'
      },
      grinding: {
        state: false,
        date: '2021-08-07'
      },
      painting: {
        state: false,
        date: '2021-08-07'
      },
      assembly: {
        state: false,
        date: '2021-08-07'
      },
      packaging: {
        state: false,
        date: '2021-08-07'
      },
      shipping: {
        state: false,
        date: '2021-08-07'
      }
    },
    items: [
      {
        id: 'ITEM-7-1',
        name: 'Item 7-1',
        status: 'Status 7-1',
        price: '70',
        quantity: '7'
      },
      {
        id: 'ITEM-7-2',
        name: 'Item 7-2',
        status: 'Status 7-2',
        price: '140',
        quantity: '7'
      }
    ]
  },
  {
    id: 'ORD-8',
    name: 'Order 8',
    customer: 'Customer 8',
    delivery: 'Delivery 8',
    status: 'Status 8',
    price: '800',
    operations: {
      machining: {
        state: true,
        date: '2021-08-08'
      },
      welding: {
        state: false,
        date: '2021-08-08'
      },
      heatTreat: {
        state: false,
        date: '2021-08-08'
      },
      grinding: {
        state: false,
        date: '2021-08-08'
      },
      painting: {
        state: false,
        date: '2021-08-08'
      },
      assembly: {
        state: false,
        date: '2021-08-08'
      },
      packaging: {
        state: false,
        date: '2021-08-08'
      },
      shipping: {
        state: false,
        date: '2021-08-08'
      }
    },
    items: [
      {
        id: 'ITEM-8-1',
        name: 'Item 8-1',
        status: 'Status 8-1',
        price: '80',
        quantity: '8'
      },
      {
        id: 'ITEM-8-2',
        name: 'Item 8-2',
        status: 'Status 8-2',
        price: '160',
        quantity: '8'
      }
    ]
  },
  {
    id: 'ORD-9',
    name: 'Order 9',
    customer: 'Customer 9',
    delivery: 'Delivery 9',
    status: 'Status 9',
    price: '900',
    operations: {
      machining: {
        state: true,
        date: '2021-08-09'
      },
      welding: {
        state: false,
        date: '2021-08-09'
      },
      heatTreat: {
        state: false,
        date: '2021-08-09'
      },
      grinding: {
        state: false,
        date: '2021-08-09'
      },
      painting: {
        state: false,
        date: '2021-08-09'
      },
      assembly: {
        state: false,
        date: '2021-08-09'
      },
      packaging: {
        state: false,
        date: '2021-08-09'
      },
      shipping: {
        state: false,
        date: '2021-08-09'
      }
    },
    items: [
      {
        id: 'ITEM-9-1',
        name: 'Item 9-1',
        status: 'Status 9-1',
        price: '90',
        quantity: '9'
      },
      {
        id: 'ITEM-9-2',
        name: 'Item 9-2',
        status: 'Status 9-2',
        price: '180',
        quantity: '9'
      }
    ]
  },
  {
    id: 'ORD-10',
    name: 'Order 10',
    customer: 'Customer 10',
    delivery: 'Delivery 10',
    status: 'Status 10',
    price: '1000',
    operations: {
      machining: {
        state: true,
        date: '2021-08-10'
      },
      welding: {
        state: false,
        date: '2021-08-10'
      },
      heatTreat: {
        state: false,
        date: '2021-08-10'
      },
      grinding: {
        state: false,
        date: '2021-08-10'
      },
      painting: {
        state: false,
        date: '2021-08-10'
      },
      assembly: {
        state: false,
        date: '2021-08-10'
      },
      packaging: {
        state: false,
        date: '2021-08-10'
      },
      shipping: {
        state: false,
        date: '2021-08-10'
      }
    },
    items: [
      {
        id: 'ITEM-10-1',
        name: 'Item 10-1',
        status: 'Status 10-1',
        price: '100',
        quantity: '10'
      },
      {
        id: 'ITEM-10-2',
        name: 'Item 10-2',
        status: 'Status 10-2',
        price: '200',
        quantity: '10'
      }
    ]
  }
];