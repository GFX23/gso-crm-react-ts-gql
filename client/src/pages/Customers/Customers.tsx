import { useForm, SubmitHandler } from 'react-hook-form';
import type { Customer } from '../../types/types';
import { useQuery } from '@apollo/client';
import GET_CUSTOMERS from '../../graphql/getCustomers';

const Customers: React.FC = () => {
  const { loading, error, data } = useQuery(GET_CUSTOMERS);
  const { register, handleSubmit, reset, formState: { errors }} = useForm<Customer>();
  const onSubmit: SubmitHandler<Customer> = (data) => {
    console.log(data);
    reset()
  }
  console.log(errors)

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  console.log(data);

  
  return (
    <div className="flex flex-col md:flex-row max-w-4xl h-screen w-screen mx-auto border-x-2">
      <div className="w-60">
      {data ? data.getAllCustomers.map((customer: Customer) => <button className="w-full">{customer.name}</button>) : null}
      </div>
    <form className="flex flex-row w-full gap-2 justify-center pt-2" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-2">
      <input type="text" placeholder="Name" {...register("name", {required: true, maxLength: 45})} />
      <input type="text" placeholder="Street" {...register("street", {})} />
      <input type="text" placeholder="City" {...register("city", {})} />
      <input type="text" placeholder="Zipcode" {...register("zipcode", {})} />
      <input type="text" placeholder="State" {...register("state", {})} />
      </div>
      <div className="flex flex-col gap-2">
      <input type="text" placeholder="Vatcode" {...register("vatCode", {required: true})} />
      <input type="text" placeholder="Contact Name" {...register("contactName", {required: true})} />
      <input type="email" placeholder="Email" {...register("email", {required: true, maxLength: 30})} />
      <input type="text" placeholder="Phone" {...register("phone", {})} />
      <input type="text" placeholder="Website" {...register("website", {})} />
      <input type="submit" />
      </div>
    </form>
    </div>
  );
};

export default Customers;