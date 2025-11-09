import React from 'react';
import Dashboard from './components/Dashboard';
import './index.css'; // ensure styles are applied

function App() {
  return (
    <div className="container">
      <header className="page-title">
        MicroVision ERP Dashboard <span className="badge">LIVE</span>
      </header>
      <main>
        <Dashboard />
      </main>
    </div>
  );
}

export default App;
