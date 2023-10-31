import { useMutation } from "@apollo/client";
import { GET_ALL_ORDERS, DELETE_ORDER } from "../../../graphql/OrdersQuery";
import type { Operations, Order } from "../../../types/types";
import { useState } from "react";
import ProgressBar from "../../../components/ProgressBar";

type OrderProps = {
  orderData: Order;
};

const OrderCard: React.FC<OrderProps> = ({orderData}) => {
  const [show, setShow] = useState(false);
  const {name, customer, delivery, operations, status, price, items, id} = orderData

  // deleteOrder mutation
  const [deleteOrder, { loading, error }] = useMutation(DELETE_ORDER, {
    refetchQueries: [{ query: GET_ALL_ORDERS }]})

  //loaders & errors
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error?.message}</p>;

  //handle delete
  const handleDelete = async () => {
    await deleteOrder({variables: {id: id}});
    };
    console.log(operations)
    console.log(items)

  // compute progress
    const progressValue = operations.filter(oper => oper.state !== true).length/8*100
        console.log(progressValue)

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
        <p><b>Operace:</b> </p>
        <div className="flex flex-row gap-4">{operations.map(op => (op.state ? <p>{op.type}</p> : null))}</div>
        <p><b>Dílce:</b> </p>
        <div className="flex flex-row gap-4">{items.map(item => (<><p>Název dílce: {item.name}</p><p>Počet dílců: {item.price}</p></>))}</div>
      </div> : null}
      <ProgressBar value={progressValue} />
    </div>
    </>
  );
};

export default OrderCard;
