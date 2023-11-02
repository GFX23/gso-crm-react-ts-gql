import { gql } from "@apollo/client";

export const GET_ALL_ORDER_NAMES = gql`
  query getAllCustomers {
    getAllOrders {
      id
      name
    }
  }
`;

export const GET_ORDERS_FOR_PLANNER = gql`
  query getAllOrders {
    getAllOrders {
      id
      name
      machining {
        date
        until
      }
    }
  }
`

export const GET_ALL_ORDERS = gql`
  query getAllOrders {
    getAllOrders {
    id
    name
    machining {
      date
      until
    }
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
      type
      state
      date
    }
    price
    status
  }
}`;

export const ADD_ORDER = gql`
  mutation addOrder($input: OrderInput!) {
    addOrder(input: $input) {
      id
      name
    }
  }`;

export const DELETE_ORDER = gql`
  mutation deleteOrder($id: String!) {
    deleteOrder(id: $id) {
      id
      name
    }
  }
`;
