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
  machining: Boolean!
  welding: Boolean!
  heatTreat: Boolean!
  grinding: Boolean!
  assembly: Boolean!
  packaging: Boolean!
  shipping: Boolean!
  machiningDate: String!
  weldingDate: String!
  heatTreatDate: String!
  grindingDate: String!
  assemblyDate: String!
  packagingDate: String!
  shippingDate: String!
}

type Order {
  id: String
  name: String
  customer: String
  delivery: String
  status: String
  price: String
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
  }
`;
export default Schema; 
//export this Schema so we can use it in our project