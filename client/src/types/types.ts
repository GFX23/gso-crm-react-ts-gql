export type OrderItem = {
  id: string;
  name: string;
  status: string;
  price: number;
  quantity: number;
};

export type Operations = [
  { type: "welding"; state: boolean; date: string },
  { type: "heatTreat"; state: boolean; date: string },
  { type: "grinding"; state: boolean; date: string },
  { type: "assembly"; state: boolean; date: string },
  { type: "packaging"; state: boolean; date: string },
  { type: "shipping"; state: boolean; date: string }
];

export type OrderInput = {
  name: string;
  customer: string;
  delivery: string;
  price: string;
  welding: boolean;
  heatTreat: boolean;
  grinding: boolean;
  assembly: boolean;
  packaging: boolean;
  shipping: boolean;
  machiningDate: string;
  machiningUntil: string;
  weldingDate: string;
  heatTreatDate: string;
  grindingDate: string;
  assemblyDate: string;
  packagingDate: string;
  shippingDate: string;
};

export type Order = {
  id: string;
  name: string;
  customer: string;
  delivery: string;
  status: string;
  price: string;
  machining:{date: string, until: string }
  operations: Operations;
  items: OrderItem[] | [];
};

export type OrderForPlanner = {
  id: string;
  name: string;
  delivery: string;
  machining: { date: string; until: string };
};

export type Customer = {
  id: string;
  name: string;
  street: string;
  city: string;
  zipcode: string;
  state: string;
  vatCode: string;
  contactName: string;
  email: string;
  phone: string;
  website: string;
};

// for MongoDB

export type FetchCustomer = {
  id: number;
  name: string;
  username: string;
  email: string;
  street: string;
  city: string;
  zipcode: string;
  state: string;
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};
