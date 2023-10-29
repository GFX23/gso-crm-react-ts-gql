import { useParams, useNavigate } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import { GET_CUSTOMER, GET_ALL_CUSTOMERS, DELETE_CUSTOMER } from "../../../graphql/CustomersQuery";

const CustomerDetail: React.FC = () => {

  // routing variables
  const navigate = useNavigate();
  const { customerId } = useParams<{ customerId: string }>();

  // getCustomer query 
  const { loading, error, data } = useQuery(GET_CUSTOMER, {
    variables: { id: customerId },});

  // deleteCustomer mutation
  const [deleteCustomer, { loading: deleteLoading, error: deleteError }] = useMutation(DELETE_CUSTOMER, {
    refetchQueries: [{ query: GET_ALL_CUSTOMERS }]})

  //loaders & errors
  if (loading || deleteLoading) return <p>Loading...</p>;
  if (error || deleteError) return <p>Error : {error?.message || deleteError?.message}</p>;

  //handle delete
  const handleDelete = async () => {
    await deleteCustomer({variables: {id: customerId}});
    navigate('/customers');
    };

  return (
    <div>
      <h2>Customer Details</h2>
      <p>{data.getCustomer.name}</p>
      <p>{data.getCustomer.street}</p>
      <p>{data.getCustomer.city}</p>
      <p>{data.getCustomer.zipcode}</p>
      <p>{data.getCustomer.state}</p>
      <p>{data.getCustomer.vatCode}</p>
      <p>{data.getCustomer.contactName}</p>
      <p>{data.getCustomer.email}</p>
      <p>{data.getCustomer.phone}</p>
      <p>{data.getCustomer.website}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default CustomerDetail;
