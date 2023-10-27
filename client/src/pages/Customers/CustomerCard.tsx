import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_CUSTOMER } from '../../graphql/CustomersQuery';

const CustomerDetail: React.FC = () => {
  const { customerId } = useParams<{ customerId: string }>();
  const { loading, error, data } = useQuery(GET_CUSTOMER,{
    variables: { id: customerId },});

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
    const customer = data.getCustomer;
  console.log(customer);

  return (
    <div>
      <h2>Customer Details</h2>
      <p>{customer.name}</p>
      <p>{customer.street}</p>
      <p>{customer.city}</p>
      <p>{customer.zipcode}</p>
      <p>{customer.state}</p>
      <p>{customer.vatCode}</p>
      <p>{customer.contactName}</p>
      <p>{customer.email}</p>
      <p>{customer.phone}</p>
      <p>{customer.website}</p>
    </div>
  );
};

export default CustomerDetail;