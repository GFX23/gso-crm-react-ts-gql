import { gql } from "@apollo/client";

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
      delivery
      machining {
        date
        until
      }
    }
  }
`

export const UPDATE_ORDER_DATE = gql`
  mutation updateOrderDate($id: String!, $date: String!, $until: String!) {
    updateOrderDate(id: $id, date: $date, until: $until) {
      id
      name
      machining {
        date
        until
      }
    }
  }
`;

export const UPDATE_ORDER_ITEMS = gql`
  mutation updateOrderItems($id: String!, $item: OrderItemInput!) {
    updateOrderItems(id: $id, item: $item) {
      id
      name
      items {
        name
        id
        price
        quantity
      }
  }
}
`;

export const DELETE_ORDER_ITEM = gql`
  mutation deleteOrderItem($id: String!, $itemId: String!) {
    deleteOrderItem(id: $id, itemId: $itemId) {
      id
      name
      items {
        id
        name
        status
        price
        quantity
      }
    }
  }
`;


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
