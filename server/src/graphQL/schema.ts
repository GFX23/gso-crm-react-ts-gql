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

type Order {
  id: String
  name: String
  customer: String
  delivery: String
  status: String
  price: String
  operations: Operations
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
  machining: Operation
  welding: Operation
  heatTreat: Operation
  grinding: Operation
  painting: Operation
  assembly: Operation
  packaging: Operation
  shipping: Operation
}

type Operation {
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
    deleteCustomer(id: String!): Customer
  }
`;
export default Schema; 
//export this Schema so we can use it in our project