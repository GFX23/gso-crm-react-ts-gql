import { GET_ALL_CUSTOMERS } from "../../graphql/CustomersQuery";
import { useQuery } from "@apollo/client";
import { Link, Outlet } from "react-router-dom";
import type { Customer } from "../../types/types";

const Customers: React.FC = () => {
  const { loading, error, data } = useQuery(GET_ALL_CUSTOMERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  console.log(data);

  return (
    <div className="flex flex-col md:flex-row max-w-4xl pt-2 h-full w-screen mx-auto border-x-2">
      <div className="w-56 p-2 ml-2 shadow-xl border gap-2 flex flex-col items-center rounded-md">
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
