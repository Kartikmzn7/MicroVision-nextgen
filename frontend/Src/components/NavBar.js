import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <h2 className="logo">MicroVision ERP</h2>
      <ul>
        <li><Link to="/finance">Finance</Link></li>
        <li><Link to="/hr">HR</Link></li>
        <li><Link to="/inventory">Inventory</Link></li>
        <li><Link to="/journey">Journey</Link></li>
        <li><Link to="/">Dashboard</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
