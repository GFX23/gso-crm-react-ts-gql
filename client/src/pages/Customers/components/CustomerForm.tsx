import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import type { Customer } from '../../../types/types';


const CustomerForm: React.FC = () => {
  const { register, handleSubmit, reset, formState: { errors }} = useForm<Customer>();
  const onSubmit: SubmitHandler<Customer> = (data) => {
    console.log(data);
    reset()
  }

  console.log(errors)

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