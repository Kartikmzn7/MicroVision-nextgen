import React from 'react';
import Dashboard from './components/Dashboard';
import './index.css'; // ensure styles are applied

function App() {
  return (
    <div className="container">
      <div className="page-title">
        MicroVision ERP Dashboard <span className="badge">LIVE</span>
      </div>
      <Dashboard />
    </div>
  );
}

export default App;
