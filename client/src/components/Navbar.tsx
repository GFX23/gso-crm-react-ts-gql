import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="w-screen border-b-2 sticky top-0 flex flex-col md:flex-row  justify-between p-2 px-8 items-center">
      <img src={"/gso-logo.png"} alt="GSO Logo" className="w-16" />
      <div className="flex flex-col md:flex-row items-center justify-between w-1/2">
      <Link to="/"><button>Home</button></Link>
      <Link to="/orders"><button>Orders</button></Link>
      <Link to="/customers"><button>Customers</button></Link>
      <Link to="/planner"><button>Planner</button></Link>
      <Link to="/todo"><button>Todo</button></Link>
      </div>
      <div className="w1-4">
      <Link to="/todo"><button>Login</button></Link>
      </div>
    </nav>
  );
};

export default Navbar;
