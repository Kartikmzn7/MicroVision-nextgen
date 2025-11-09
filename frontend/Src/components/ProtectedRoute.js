import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ auth, children, role }) {
  if (!auth.loggedIn) {
    return <Navigate to="/login" />;
  }
  if (role && auth.role !== role) {
    return <div className="card"><h2>Access Denied</h2><p>You do not have permission.</p></div>;
  }
  return children;
}

export default ProtectedRoute;
