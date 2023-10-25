import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="flex flex-row w-screen gap-4">
 
        
          <Link to="/">Home</Link>
        
        
          <Link to="/orders">Orders</Link>
        
        
          <Link to="/customers">Customers</Link>
        
        
          <Link to="/planner">Planner</Link>
        
        
          <Link to="/todo">Todo</Link>
        

    </nav>
  );
};

export default Navbar;