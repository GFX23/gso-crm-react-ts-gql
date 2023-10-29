import { gql } from "@apollo/client";

export const GET_ALL_ORDER_NAMES = gql`
  query getAllCustomers {
    getAllOrders {
    id
    name
  }
}
`;

export const GET_ORDER = gql`
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

export const ADD_ORDER = gql`
  mutation addCustomer($input: CustomerInput!) {
    addCustomer(input: $input) {
      name
      email
      id
      contactName
      city
    }
  }
`;

export const DELETE_CUSTOMER = gql`
  mutation deleteCustomer($id: String!) {
    deleteCustomer(id: $id) {
      id
      name
    }
  }
`;