import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Finance from './components/Finance';
import HR from './components/HR';
import Inventory from './components/Inventory';
import Journey from './components/Journey';
import NavBar from './components/NavBar';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import './index.css';

function App() {
  const [auth, setAuth] = useState({ loggedIn: false, role: null });

  return (
    <Router>
      <div className="container">
        <NavBar />
        <header className="page-title">
          MicroVision ERP Dashboard <span className="badge">LIVE</span>
        </header>
        <main>
          <Routes>
            <Route path="/login" element={<Login setAuth={setAuth} />} />
            <Route path="/" element={
              <ProtectedRoute auth={auth}>
                <Dashboard />
              </ProtectedRoute>
            } />
            <Route path="/finance" element={
              <ProtectedRoute auth={auth} role="admin">
                <Finance />
              </ProtectedRoute>
            } />
            <Route path="/hr" element={
              <ProtectedRoute auth={auth}>
                <HR />
              </ProtectedRoute>
            } />
            <Route path="/inventory" element={
              <ProtectedRoute auth={auth}>
                <Inventory />
              </ProtectedRoute>
            } />
            <Route path="/journey" element={
              <ProtectedRoute auth={auth}>
                <Journey />
              </ProtectedRoute>
            } />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
