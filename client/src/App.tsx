import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Orders from './pages/Orders/Orders';
import Customers from './pages/Customers/Customers';
import Planner from './pages/Planner/Planner';
import Todo from './pages/Todo/Todo';
import Navbar from './components/Navbar';
import Home from './pages/Home/Home';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/orders" Component={Orders} />
        <Route path="/customers" Component={Customers} />
        <Route path="/planner" Component={Planner} />
        <Route path="/todo" Component={Todo} />
      </Routes>
    </Router>
  );
};

export default App;
