import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import type { Customer } from '../../../types/types';
import { useMutation } from '@apollo/client';
import {GET_ALL_CUSTOMERS, ADD_CUSTOMER } from '../../../graphql/CustomersQuery';


const CustomerForm: React.FC = () => {
  const { register, handleSubmit, reset, formState: { errors }} = useForm<Customer>();
  const [addCustomer, { loading, error }] = useMutation(ADD_CUSTOMER, {refetchQueries: [GET_ALL_CUSTOMERS]});
  const onSubmit: SubmitHandler<Customer> = async (data) => {
    await addCustomer({variables: {input: data}})
    console.log(data);
    reset()
  }

  console.log(errors)

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <form className="flex flex-row w-full gap-2 justify-center pt-2" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-2">
        <input type="text" placeholder="Name" {...register('name', { required: true, maxLength: 45 })} />
        <input type="text" placeholder="Street" {...register('street', {})} />
        <input type="text" placeholder="City" {...register('city', {})} />
        <input type="text" placeholder="Zipcode" {...register('zipcode', {})} />
        <input type="text" placeholder="State" {...register('state', {})} />
      </div>
      <div className="flex flex-col gap-2">
        <input type="text" placeholder="Vatcode" {...register('vatCode', { required: true })} />
        <input type="text" placeholder="Contact Name" {...register('contactName', { required: true })} />
        <input type="email" placeholder="Email" {...register('email', { required: true, maxLength: 30 })} />
        <input type="text" placeholder="Phone" {...register('phone', {})} />
        <input type="text" placeholder="Website" {...register('website', {})} />
        <input type="submit" />
      </div>
    </form>
  );
};

export default CustomerForm;