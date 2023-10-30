import { gql } from "@apollo/client";

export const GET_ALL_ORDER_NAMES = gql`
  query getAllCustomers {
    getAllOrders {
    id
    name
  }
}
`;

export const GET_ALL_ORDERS = gql`
  query getAllOrders {
    getAllOrders {
    id
    name
    customer
    delivery
    items {
      id
      name
      status
      price
      quantity
    }
    operations {
      machining {
        state
        date
      }
      welding {
        state
        date
      }
      heatTreat {
        state
        date
      }
      grinding {
        state
        date
      }
      painting {
        state
        date
      }
      assembly {
        state
        date
      }
      packaging {
        state
        date
      }
      shipping {
        state
        date
      }
    }
    price
    status
  }
}`;

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

export const DELETE_ORDER = gql`
  mutation deleteOrder($id: String!) {
    deleteOrder(id: $id) {
      id
      name
    }
  }
`;