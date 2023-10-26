import { gql } from "@apollo/client";

const GET_CUSTOMERS = gql`
  query Query {
    getAllCustomers {
      name
      id
    }
  }`;

  export default GET_CUSTOMERS;