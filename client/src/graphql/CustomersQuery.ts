import { gql } from "@apollo/client";

export const GET_ALL_CUSTOMERS = gql`
  query getAllCustomers {
    getAllCustomers {
      name
      id
    }
  }
`;

export const GET_CUSTOMER = gql`
  query getCustomer($id: String!) {
    getCustomer(id: $id) {
      name
      id
      street
      city
      zipcode
      state
      vatCode
      contactName
      email
      phone
      website
    }
  }
`;

export default GET_ALL_CUSTOMERS;