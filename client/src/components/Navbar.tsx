import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="w-screen border-b-2 sticky top-0 flex flex-col md:flex-row  justify-between p-2 px-8 items-center">
      <img src={"/gso-logo.png"} alt="GSO Logo" className="w-16" />
      <div className="flex flex-col md:flex-row items-center justify-between w-1/2">
      <Link to="/"><button className="w-40">PŘEHLED</button></Link>
      <Link to="/customers"><button className="w-40">ZÁKAZNÍCI</button></Link>
      <Link to="/orders"><button className="w-40">ZAKÁZKY</button></Link>
      <Link to="/planner"><button className="w-40">PLÁNOVAČ</button></Link>
      <Link to="/todo"><button className="w-40">ÚKOLY</button></Link>
      </div>
      <div className="w1-4">
      <Link to="/todo"><button>Login</button></Link>
      </div>
    </nav>
  );
};

export default Navbar;
