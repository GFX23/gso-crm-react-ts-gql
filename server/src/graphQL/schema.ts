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

 
  #handle user commands
  type Query {
    getAllCustomers: [Customer]
    getCustomer(id: String): Customer
  }
  type Mutation {
    #the addPerson commmand will accept an argument of type String.
    #it will return a 'Person' instance. 
    addPerson(name: String): Person
    addCustomer(input: CustomerInput!): Customer
  }
`;
export default Schema; 
//export this Schema so we can use it in our project