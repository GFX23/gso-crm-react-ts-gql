import { gql } from "apollo-server-express"; //will create a schema
const Schema = gql`
  #CUSTOMER TYPE
  type Customer {
  id: String!
  name: String
  street: String
  city: String
  zipcode: String
  state: String
  vatCode: String
  contactName: String
  email: String
  phone: String
  website: String
}
input CustomerInput {
  name: String!
  street: String!
  city: String!
  zipcode: String!
  state: String!
  vatCode: String!
  contactName: String!
  email: String!
  phone: String!
  website: String!
}

input OrderInput {
  name: String!
  customer: String!
  delivery: String!
  price: String!
  welding: Boolean!
  heatTreat: Boolean!
  grinding: Boolean!
  assembly: Boolean!
  packaging: Boolean!
  shipping: Boolean!
  machiningDate: String!
  machiningUntil: String!
  weldingDate: String!
  heatTreatDate: String!
  grindingDate: String!
  assemblyDate: String!
  packagingDate: String!
  shippingDate: String!
}

input OrderItemInput {
  name: String!
  price: String!
  quantity: String!
  status: String!
}

type Order {
  id: String
  name: String
  customer: String
  delivery: String
  status: String
  price: String
  machining: Machining
  operations: [Operations]
  items: [OrderItem]
}

type OrderItem {
  id: String
  name: String
  status: String
  price: String
  quantity: String
}

type Operations {
  type: String  
  state: Boolean
  date: String
}

type Machining {
  date: String
  until: String
}
 
  #handle user commands
  type Query {
    getAllCustomers: [Customer]
    getCustomer(id: String): Customer
    getAllOrders: [Order]
  }
  type Mutation {
    addCustomer(input: CustomerInput!): Customer
    addOrder(input: OrderInput!): Order
    deleteCustomer(id: String!): Customer
    deleteOrder(id: String!): Order
    updateOrderDate(id: String!, date: String!, until: String!): Order
    updateOrderItems(id: String!, item: OrderItemInput!): Order
    deleteOrderItem(id: String!, itemId: String!): Order
  }
`;
export default Schema; 
//export this Schema so we can use it in our project