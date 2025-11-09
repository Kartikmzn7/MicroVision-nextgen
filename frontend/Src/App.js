import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Finance from './components/Finance';
import HR from './components/HR';
import Inventory from './components/Inventory';
import Journey from './components/Journey';
import NavBar from './components/NavBar';
import './index.css'; // Global styles

function App() {
  return (
    <Router>
      <div className="container">
        <NavBar />
        <header className="page-title">
          <h1>
            MicroVision ERP Dashboard <span className="badge">LIVE</span>
          </h1>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/finance" element={<Finance />} />
            <Route path="/hr" element={<HR />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/journey" element={<Journey />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
