import React from "react";
import { GET_ALL_ORDER_NAMES } from "../../graphql/OrdersQuery";
import { useQuery } from "@apollo/client";
import { Link, Outlet } from "react-router-dom";
import { Order } from "../../types/types";

export const Orders: React.FC = () => {
  const { loading, error, data } = useQuery(GET_ALL_ORDER_NAMES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div className="flex flex-col md:flex-row max-w-4xl pt-2 h-full w-screen mx-auto border-x-2">
      <div className="w-full px-2">
        <Link to={`/orders/addOrder`}>
          <button className="w-full bg-blue-200">Přidej zákázku</button>
        </Link>
        {data
          ? data.getAllOrders.map((order: Order) => (
              <Link to={`/orders/${order.id}`} key={order.id}>
                <button className="w-full">{order.name}</button>
              </Link>
            ))
          : null}
      </div>
      <Outlet />
    </div>
  );
};

export default Orders;