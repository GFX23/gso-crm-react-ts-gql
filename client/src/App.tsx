import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Orders from "./pages/Orders/Orders";
import Customers from "./pages/Customers/Customers";
import Planner from "./pages/Planner/Planner";
import Todo from "./pages/Todo/Todo";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import CustomerDetail from "./pages/Customers/components/CustomerCard";
import CustomerForm from "./pages/Customers/components/CustomerForm";
import ErrorPage from "./pages/Error/Error";

const App: React.FC = () => {
  return (
    <Router>
      <div className="container mx-auto flex h-screen flex-col items-center">
        <Navbar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/orders" Component={Orders} />
          <Route path="/customers" Component={Customers}>
            <Route index element={<CustomerForm />} />
            <Route path={"/customers/addCustomer"} Component={CustomerForm} />
            <Route path={`/customers/:customerId`} Component={CustomerDetail} />
              </Route>
              <Route path="/planner" Component={Planner} />
              <Route path="/todo" Component={Todo} />
              <Route path="*" element={<ErrorPage error={"Page not Found"} />} />
            </Routes>
          </div>
    </Router>
  );
};

export default App;
