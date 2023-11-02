import { GET_ALL_CUSTOMERS, ADD_CUSTOMER } from '../../../graphql/CustomersQuery';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useMutation } from '@apollo/client';

import type { Customer } from '../../../types/types';

const CustomerForm: React.FC = () => {
  const { register, handleSubmit, reset, formState: { errors }} = useForm<Customer>();
  const [addCustomer, { loading, error }] = useMutation(ADD_CUSTOMER, {refetchQueries: [GET_ALL_CUSTOMERS]});
  const onSubmit: SubmitHandler<Customer> = async (data) => {
    await addCustomer({variables: {input: data}})
    reset()
  }

  console.log(errors)

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  const inputsLeft = [
    ["Jméno: ",<input type="text" placeholder="Name" {...register('name', { required: true, maxLength: 45 })} />],
    ["Adresa: ",<input type="text" placeholder="Street" {...register('street', {})} />],
    ["Město: ",<input type="text" placeholder="City" {...register('city', {})} />],
    ["Stát: ",<input type="text" placeholder="State" {...register('state', {})} />],
    ["PSČ: ",<input type="text" placeholder="Zipcode" {...register('zipcode', {})} />],
  ]

  const inputsRight = [
    ["IČO: ",<input type="text" placeholder="Vatcode" {...register('vatCode', { required: true })} />],
    ["Kontakt: ",<input type="text" placeholder="Contact Name" {...register('contactName', { required: true })} />],
    ["E-mail: ",<input type="email" placeholder="Email" {...register('email', { required: true, maxLength: 30 })} />],
    ["Telefon: ",<input type="text" placeholder="Phone" {...register('phone', {})} />],
    ["Web: ",<input type="text" placeholder="Website" {...register('website', {})} />],
  ]


  return (<div className="coltainer w-full p-2 items-center border-shadow mx-2">
    <h2>Vytvoř zákazníka</h2>
    <form className="rowtainer justify-center border-shadow w-full h-fit p-2 mx-2" onSubmit={handleSubmit(onSubmit)}>
      <div className="coltainer">
        {/* MAPPING LEFT SIDE OF THE FORM */}
        {inputsLeft.map(input => (
          <div className="rowtainer-center-end">
            <p><b>{input[0]}</b></p>
            {input[1]}
          </div>))}
        <input className="self-end"type="submit" />
      </div>
      <div className="coltainer">
          {/* MAPPING RIGHT SIDE OF THE FORM */}
        {inputsRight.map(input => (
          <div className="rowtainer-center-end">
            <p><b>{input[0]}</b></p>
            {input[1]}
          </div>))}
      </div>
    </form>
    </div>
  );
};

export default CustomerForm;