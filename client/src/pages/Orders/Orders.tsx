import { Customer, Order } from "../../types/types";
import { GET_ALL_CUSTOMERS } from "../../graphql/CustomersQuery";
import { GET_ALL_ORDERS } from "../../graphql/OrdersQuery";
import { useQuery } from "@apollo/client";
import OrderCard from "./components/OrderCard";
import OrderForm from "./components/OrderForm";

export const Orders: React.FC = () => {
  const { loading, error, data } = useQuery(GET_ALL_ORDERS);
  const { loading: customersLoading, error: customersError, data: customerData } = useQuery(GET_ALL_CUSTOMERS);

  if (loading || customersLoading) return <p>Loading...</p>;
  if (error || customersError) return <p>Error</p>;

  const customerNames = customerData.getAllCustomers.map((customer: Customer) => customer.name)

  return (
    <div className="coltainer md:flex-row page-container">
      <div className="coltainer w-full h-full px-2 overflow-auto border-shadow p-2 mx-2">
      <OrderForm customerNames={customerNames} />
        {data ? data.getAllOrders.map((order: Order) => <OrderCard orderData={order} key={order.id} />) : null}
      </div>
    </div>
  );
};

export default Orders;