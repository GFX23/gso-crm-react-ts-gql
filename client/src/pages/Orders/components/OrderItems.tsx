import type { OrderItem } from "../../../types/types";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../../../components/ButtonUtil";
import { useMutation } from "@apollo/client";
import { DELETE_ORDER_ITEM, GET_ALL_ORDERS, UPDATE_ORDER_ITEMS } from "../../../graphql/OrdersQuery";
import Loader from "../../Loading/Loading";
import ErrorPage from "../../Error/Error";

type OrderItemsProps = {
  orderItems: OrderItem[];
  id: string;
};

const OrderItems: React.FC<OrderItemsProps> = ({ orderItems, id }) => {
  const [show, setShow] = useState(false);
  const {register, reset, handleSubmit, formState: { errors }} = useForm<OrderItem>();
  // use Mutation
  
  const [updateOrderItems, {loading: upLoad, error: upError}] = useMutation(UPDATE_ORDER_ITEMS, {
    refetchQueries: [{ query: GET_ALL_ORDERS }],});
    
  const [deleteOrderItem, { loading, error }] = useMutation(DELETE_ORDER_ITEM, {
    refetchQueries: [{ query: GET_ALL_ORDERS }],});
      
  const handleDelete = async (id: string, itemId: string | undefined) => {
    console.log(id, itemId);
    await deleteOrderItem({ variables: { id: id, itemId: itemId } });
  }
      
  const onSubmit = async (data: OrderItem) => {
    try {
      await updateOrderItems({ variables: { id: id, item: {...data, status:"Active"}} });
    } catch (error) {
      console.log(JSON.stringify(error, null, 2));
    } finally {
      reset()
      setShow(false);
    }
  }

  if (loading || upLoad) return <Loader />;
  if (error || upError) return <ErrorPage error={error?.message || upError?.message || "Nepodařilo se smazat/přidat zakázku" } />;

  return (
    <div className="coltainer">
      <div className="rowtainer items-center gap-4 border-b-2 py-1 pb-2">
        <p className="font-bold">Dílce:</p>
        <Button state={show} type="blue" onClick={() => setShow(!show)}/>
      </div>
      <div className="div">
        {show ? (
          <form
            className="rowtainer justify-between py-2 border-b-2 w-full"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="gap-2 flex">
              <input
                type="text"
                placeholder="Name"
                {...register("name", { required: true, maxLength: 45 })}
              />
              <input
                type="text"
                placeholder="Quantity"
                {...register("quantity", {})}
              />
              <input
                type="text"
                placeholder="Price"
                {...register("price", { required: true })}
              />
            </div>
            <input type="submit" />
          </form>
        ) : null}
      </div>

      {/* MAPPING ORDER ITEMS */}

      <div className="coltainer">
        {orderItems.map((item: OrderItem, index) => (
          <div key={index} className="rowtainer-center-between border-shadow p-1.5">
            <div className="rowtainer gap-4">
              <p><b>Název dílce:</b> {item.name}</p>
              <p><b>Počet dílců:</b> {item.quantity} </p>
              <p><b>Cena:</b> {item.price} </p>
            </div>
            <div className="flex gap-2">
              <Button type="green" />
              <Button type="red" onClick={() => handleDelete(id, item.id)}/>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default OrderItems;
