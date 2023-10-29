
export type OrderItem = {
  id: string;
  name: string;
  status: string;
  price: string;
  quantity: string;
};

export type Operations = {
  machining: {state: boolean, date: string}
  welding: {state: boolean, date: string}
  heatTreat: {state: boolean, date: string}
  grinding: {state: boolean, date: string}
  painting: {state: boolean, date: string}
  assembly: {state: boolean, date: string}
  packaging: {state: boolean, date: string}
  shipping: {state: boolean, date: string}
}

export type Order = {
  id: string;
  name: string;
  customer: string;
  delivery: string;
  status: string;
  price: string;
  operations: Operations;
  items: OrderItem[];
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
}