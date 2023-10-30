import { useMutation } from "@apollo/client";
import { GET_ALL_ORDER_NAMES, DELETE_ORDER } from "../../../graphql/OrdersQuery";
import type { Order } from "../../../types/types";
import { useState } from "react";

type OrderProps = {
  orderData: Order;
};

const OrderCard: React.FC<OrderProps> = ({orderData}) => {
  const [show, setShow] = useState(false);
  const {name, customer, delivery, operations, status, price, items, id} = orderData

  // deleteOrder mutation
  const [deleteOrder, { loading, error }] = useMutation(DELETE_ORDER, {
    refetchQueries: [{ query: GET_ALL_ORDER_NAMES }]})

  //loaders & errors
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error?.message}</p>;

  //handle delete
  const handleDelete = async () => {
    await deleteOrder({variables: {id: id}});
    };
    console.log(operations)
    console.log(items)

  return (
    <>
    <div className="w-full flex flex-col justify-between p-1 border-gray-100 rounded-lg border-2 items-center">
      <div className="flex flex-row justify-between w-full">
        <div className="flex flex-col">
          <p><b>Název:</b> {name}</p>
          <p><b>Zákazník:</b> {customer}</p>
          <p><b>Datum dodání:</b> {delivery}</p>
        </div>
        <div className="flex flex-row gap-2 p-4">
          <button className="w-8 p-1" onClick={() => setShow(!show)}>{show ? "-" : "+"}</button>
          <button className="w-8 p-1" onClick={handleDelete}>X</button>
        </div>
      </div>
      {show ? <div className="div">
        <p><b>Status:</b> {status}</p>
        <p><b>Cena:</b> {price}</p>
        <p><b>Operace:</b> {}</p>
        <div>{items.map(item => <p>{item.name}</p>)}</div>
      </div> : null}
    </div>
    </>
  );
};

export default OrderCard;
