import { ADD_ORDER, GET_ALL_ORDERS } from '../../../graphql/OrdersQuery';
import { useMutation } from '@apollo/client';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useState } from 'react';

import type { OrderInput } from '../../../types/types';

interface RightInputs {
  label: string;
  name: "welding" | "heatTreat" | "grinding" | "assembly" | "packaging" | "shipping";
  dateName: "weldingDate" | "heatTreatDate" | "grindingDate" | "assemblyDate" | "packagingDate" | "shippingDate";
}

type OrderFormProps = {
  customerNames: string[];
}

const OrderForm: React.FC<OrderFormProps> = ({customerNames}) => {

  const [modalOpen, setModalOpen] = useState(false);

  const { register, handleSubmit, reset, formState: { errors }} = useForm<OrderInput>();

  const [addOrder, { loading, error }] = useMutation(ADD_ORDER, {refetchQueries: [GET_ALL_ORDERS]});

  const onSubmit: SubmitHandler<OrderInput> = async (data) => {
    console.log(data);
    await addOrder({variables: {input: data }})
    reset()
  }

  console.log(errors)

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  const leftInputs = [
    ["Zákazník: ", <select {...register("customer", { required: true })}>
    <option>Vyber zákazníka</option>
      {customerNames.map((customerName) => <option value={customerName}>{customerName}</option>)}
    </select>],
    ["ID Zakázky: ", <input type="text" placeholder="Name" {...register("name", {required: true, maxLength: 45})} />],
    ["Cena: ", <input type="text" placeholder="Price" {...register("price", {required: true})} />],
    ["Datum dodání: ", <input type="date" placeholder="Delivery" {...register("delivery", {})} />],
    ["Obrábění OD: ", <input type="date" placeholder="Date" {...register("machiningDate", {})} />],
    ["DO: ", <input type="date" placeholder="Date" {...register("machiningUntil", {})} />],
  ]

  const rightInputs: RightInputs[] = [
    { label: "Svařování: ", name: "welding", dateName: "weldingDate" },
    { label: "Povrchovka: ", name: "heatTreat", dateName: "heatTreatDate" },
    { label: "Broušení: ", name: "grinding", dateName: "grindingDate" },
    { label: "Montáž: ", name: "assembly", dateName: "assemblyDate" },
    { label: "Balení: ", name: "packaging", dateName: "packagingDate" },
    { label: "Doprava: ", name: "shipping", dateName: "shippingDate" }
  ]

  return (
    <>
    <button className="w-full bg-blue-200" onClick={() => setModalOpen(!modalOpen)}>Přidej zákázku</button>
    {modalOpen ? <div>
    <form className="rowtainer w-full justify-center p-2 border-shadow" onSubmit={handleSubmit(onSubmit)}>
      <div className="coltainer justify-center">
        <div className="coltainer">
          {/* MAPPING LEFT SIDE OF THE FORM */}
          {leftInputs.map(input => (
            <div className="rowtainer-center-end">
              <p><b>{input[0]}</b></p>
              {input[1]}
            </div>
          ))}
        <input className="self-end"type="submit" />
        </div>
      </div>
      <div className="coltainer">
        {/* MAPPING RIGHT SIDE OF THE FORM */}
        {rightInputs.map((input, index) => (
          <div className="rowtainer-center-end" key={index}>
            <p><b>{input.label}</b></p>
            <input type="checkbox" className="w-4 h-4" placeholder={input.name} {...register(input.name, {})} />
            <input type="date" placeholder="Date" {...register(input.dateName, {})} />
          </div>
          ))}
      </div>
    </form>
    </div> : null}
    </>
  );
};

export default OrderForm;