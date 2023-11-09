import { GET_ALL_CUSTOMERS } from "../../graphql/CustomersQuery";
import { useQuery } from "@apollo/client";
import { Link, Outlet } from "react-router-dom";
import type { Customer } from "../../types/types";

const Customers: React.FC = () => {
  const { loading, error, data } = useQuery(GET_ALL_CUSTOMERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  console.log(data)

  return (
    <div className="coltainer md:flex-row page-container gap-0">
      <div className="w-56 p-2 ml-2 coltainer border-shadow items-center">
        <Link to={`/customers/addCustomer`}>
          <button className="w-48 bg-blue-200">Přidej zákazníka</button>
        </Link>
        {data
          ? data.getAllCustomers.map((customer: Customer) => (
              <Link to={`/customers/${customer.id}`} key={customer.id}>
                <button className="w-48">{customer.name}</button>
              </Link>
            ))
          : null}
      </div>
      <Outlet />
    </div>
  );
};

export default Customers;
