import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { ADD_ORDER, GET_ALL_ORDERS } from '../../../graphql/OrdersQuery';
import { OrderInput } from '../../../types/types';

type OrderFormProps = {
  customerNames: string[];
}

const OrderForm: React.FC<OrderFormProps> = ({customerNames}) => {
  // modal open state
  const [open, setOpen] = useState(true);

  // form
  const { register, handleSubmit, reset, formState: { errors }} = useForm<OrderInput>();

  // graphql query
  const [addOrder, { loading, error }] = useMutation(ADD_ORDER, {refetchQueries: [GET_ALL_ORDERS]});

  // form submit handler
  const onSubmit: SubmitHandler<OrderInput> = async (data) => {
    console.log(data);
    await addOrder({variables: {input: data }})
    reset()
  }

  console.log(errors)

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <>
    <button className="w-full bg-blue-200" onClick={() => setOpen(!open)}>Přidej zákázku</button>
    {open ? <div>
    <form className="rowtainer w-full justify-center p-2 border rounded-md shadow-xl" onSubmit={handleSubmit(onSubmit)}>
      <div className="coltainer justify-between">
        <div className="coltainer w-76 ">
          <div className="rowtainer-center-between ">
            <p><b>ID zakázky:</b></p>
            <input type="text" placeholder="Name" {...register("name", {required: true, maxLength: 45})} />
          </div>
          <div className="rowtainer-center-between">
            <p><b>Zákazník:</b></p>
            <select {...register("customer", { required: true })}>
            <option>Vyber zákazníka</option>
              {customerNames.map((customerName) => <option value={customerName}>{customerName}</option>)}
            </select>
          </div>
          <div className="rowtainer-center-between">
            <p><b>Cena:</b></p>
            <input type="text" placeholder="Price" {...register("price", {required: true})} />
          </div>
          <div className="rowtainer-center-between">
            <p><b>Datum dodání:</b></p>
            <input type="date" placeholder="Delivery" {...register("delivery", {})} />
          </div>
        <div className="rowtainer-center-between">
          <p className="font-semibold w-24">Obrábění:</p>
          <div className="flex flex-col gap-2">
            <div className="rowtainer-center-between">
              <p><b>OD:</b></p><input type="date" placeholder="Date" {...register("machiningDate", {})} />
            </div>
            <div className="rowtainer-center-between">
              <p><b>DO:</b></p><input type="date" placeholder="Date" {...register("machiningUntil", {})} />
            </div>
          </div>
        </div>
          </div>
          </div>
      <div className="coltainer">
        <div className="rowtainer-center-between">
          <p className="font-semibold w-24">Svařování:</p>
          <input type="checkbox" className="w-4 h-4" placeholder="welding" {...register("welding", {})} />
          <input type="date" placeholder="Date" {...register("weldingDate", {})} />
        </div>
        <div className="rowtainer-center-between">
          <p className="font-semibold w-24">Povrchovka:</p>
          <input type="checkbox" className="w-4 h-4" placeholder="heatTreat" {...register("heatTreat", {})} />
          <input type="date" placeholder="Date" {...register("heatTreatDate", {})} />
        </div>
        <div className="rowtainer-center-between">
          <p className="font-semibold w-24">Broušení:</p>
          <input type="checkbox" className="w-4 h-4" placeholder="grinding" {...register("grinding", {})} />
          <input type="date" placeholder="Date" {...register("grindingDate", {})} />
        </div>
        <div className="rowtainer-center-between">
          <p className="font-semibold w-24">Montáž:</p>
          <input type="checkbox" className="w-4 h-4" placeholder="assembly" {...register("assembly", {})} />
          <input type="date" placeholder="Date" {...register("assemblyDate", {})} />
        </div>
        <div className="rowtainer-center-between">
          <p className="font-semibold w-24">Balení:</p>
          <input type="checkbox" className="w-4 h-4" placeholder="packaging" {...register("packaging", {})} />
          <input type="date" placeholder="Date" {...register("packagingDate", {})} />
        </div>
        <div className="rowtainer-center-between">
          <p className="font-semibold w-24">Doprava:</p>
          <input type="checkbox" className="w-4 h-4" placeholder="Machining" {...register("shipping", {})} />
          <input type="date" placeholder="Date" {...register("shippingDate", {})} />
        </div>
      </div>
            <input className="self-center"type="submit" />
    </form>
    </div> : null}
    </>
  );
};

export default OrderForm;