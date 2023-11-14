import { GET_ALL_ORDERS, DELETE_ORDER } from "../../../graphql/OrdersQuery";
import { useMutation } from "@apollo/client";
import { useState } from "react";
import ProgressBar from "../../../components/ProgressBar";
import ErrorPage from "../../Error/Error";

import type { Order } from "../../../types/types";
import Loader from "../../Loading/Loading";
import OrderItems from "./OrderItems";
import Button from "../../../components/ButtonUtil";

type OrderProps = {
  orderData: Order;
};

const OrderCard: React.FC<OrderProps> = ({ orderData }) => {
  const [show, setShow] = useState(false);
  const {
    name,
    customer,
    delivery,
    machining,
    operations,
    status,
    price,
    items,
    id,
  } = orderData;

  console.log(orderData);

  const [deleteOrder, { loading, error }] = useMutation(DELETE_ORDER, {
    refetchQueries: [{ query: GET_ALL_ORDERS }],
  });

  if (loading) return <Loader />;
  if (error) return <ErrorPage error={"Nepodařilo se získat data!"} />;

  const handleDelete = async () => {
    await deleteOrder({ variables: { id: id } });
  };

  // compute progress
  const progressValue =
    (operations.filter((oper) => oper.state !== true).length / 8) * 100;
  console.log(progressValue);

  return (
    <>
      <div className="coltainer-center-between w-full p-2 border-shadow">
        <div className="flex flex-row justify-between w-full">
          <div className="coltainer gap-1">
            <p>
              <b>Název zakázky:</b> {name}
            </p>
            <p>
              <b>Zákazník:</b> {customer}
            </p>
            <p>
              <b>Datum dodání:</b> {delivery}
            </p>
          </div>
          <div>
            <p>
              <b>Obrábění:</b> {machining?.date} -- {machining?.until}
            </p>

          </div>
          <div className="rowtainer p-4">
            <Button type="blue" state={show} onClick={() => setShow(!show)}/>
            <Button type="red" onClick={handleDelete}/>
          </div>
        </div>
        {show ? (
          <div className="coltainer gap-1 py-2">
            <div className="border"></div>
            <p>
              <b>Cena: </b> {price}
            </p>
            <div className="rowtainer items-center">
              <p>
                <b>Operace: </b>{" "}
              </p>
              {operations.map((op, index) => (op.state ? <p key={index} className="border-shadow p-0.5 bg-blue-200">{op.type.toLocaleUpperCase()}</p> : null))}
            </div>
            <div className="border"></div>
              <OrderItems id={id} orderItems={items} />
          </div>
        ) : null}
        <ProgressBar value={progressValue} />
      </div>
    </>
  );
};

export default OrderCard;
