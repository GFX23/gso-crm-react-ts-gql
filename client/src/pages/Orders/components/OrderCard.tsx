import { GET_ALL_ORDERS, DELETE_ORDER } from "../../../graphql/OrdersQuery";
import { useMutation } from "@apollo/client";
import { useState } from "react";
import ProgressBar from "../../../components/ProgressBar";

import type { Order } from "../../../types/types";

type OrderProps = {
  orderData: Order;
};

const OrderCard: React.FC<OrderProps> = ({orderData}) => {
  const [show, setShow] = useState(false);
  const {name, customer, delivery, machining, operations, status, price, items, id} = orderData

  console.log(orderData)

  const [deleteOrder, { loading, error }] = useMutation(DELETE_ORDER, {
    refetchQueries: [{ query: GET_ALL_ORDERS }]})

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error?.message}</p>;

  const handleDelete = async () => {
    await deleteOrder({variables: {id: id}});
    };

  // compute progress
    const progressValue = operations.filter(oper => oper.state !== true).length/8*100
        console.log(progressValue)

  return (
    <>
    <div className="coltainer-center-between w-full p-2 border-shadow">
      <div className="flex flex-row justify-between w-full">
        <div className="coltainer gap-1">
          <p><b>Název zakázky:</b> {name}</p>
          <p><b>Zákazník:</b> {customer}</p>
          <p><b>Datum dodání:</b> {delivery}</p>
        </div>
        <div>
          <p><b>Obrábění start:</b> {machining?.date}</p>
          <p><b>Obrábění konec:</b> {machining?.until}</p>
        </div>
        <div className="rowtainer p-4">
          <button className="w-8 p-1" onClick={() => setShow(!show)}>{show ? "-" : "+"}</button>
          <button className="w-8 p-1" onClick={handleDelete}>X</button>
        </div>
      </div>
      {show ? <div className="coltainer gap-1 p-2">
      <div className="border"></div>
        <p><b>Cena: </b> {price}</p>
        <div className="rowtainer"><p><b>Operace: </b> </p>{operations.map(op => (op.state ? <p>{op.type}</p> : null))}</div>
        <div className="border"></div>
        <p><b>Dílce:</b> </p>
        <div className="coltainer">{items.map(item => (<><p><b>Název dílce:</b> {item.name} <b>Počet dílců:</b> {item.quantity}</p></>))}</div>
      </div> : null}
      <ProgressBar value={progressValue} />
    </div>
    </>
  );
};

export default OrderCard;
