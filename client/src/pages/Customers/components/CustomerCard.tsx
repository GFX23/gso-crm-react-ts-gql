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

  const { name, street, city, zipcode, state, vatCode, contactName, email, phone, website } = data.getCustomer;

  return (
    <div className="coltainer border-shadow w-full mx-2 p-2 ">
      <h2>Karta zákazníka</h2>
      <div className="rowtainer-center-between border-shadow p-2">
        <div className="coltainer">
          <p><b>Jméno: </b> {name}</p>
          <p><b>Ulice: </b>{street}</p>
          <p><b>Město: </b>{city}</p>
          <p><b>Stát: </b>{state}</p>
          <p><b>PSČ: </b>{zipcode}</p>
          <p><b>IČO: </b>{vatCode}</p>
        </div>
        <div className="coltainer">
          <p><b>Kontaktní osoba: </b>{contactName}</p>
          <p><b>E-mail: </b>{email}</p>
          <p><b>Telefon: </b>{phone}</p>
          <p><b>Website: </b><a href={website}>{website}</a></p>
        </div>
      </div>
          <button onClick={handleDelete}>Smazat</button>
    </div>
  );
};

export default CustomerDetail;
