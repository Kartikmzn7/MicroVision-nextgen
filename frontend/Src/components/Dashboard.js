import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Custom hook for fetching data with loading/error states
function useFetch(url) {
  const [data, setData] = useState(null);
  const [state, setState] = useState({ loading: true, error: null });

  useEffect(() => {
    axios.get(url)
      .then(res => {
        setData(res.data);
        setState({ loading: false, error: null });
      })
      .catch(err => {
        setState({ loading: false, error: err.message || 'Error' });
      });
  }, [url]);

  return { data, ...state };
}

// Reusable Card component
function Card({ title, subtitle, children }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      {subtitle && <div className="sub">{subtitle}</div>}
      {children}
    </div>
  );
}

function Dashboard() {
  const finance = useFetch('http://localhost:5000/finance');
  const hr = useFetch('http://localhost:5000/hr');
  const inventory = useFetch('http://localhost:5000/inventory');
  const journey = useFetch('http://localhost:5000/journey');

  const renderBlock = (state) => {
    if (state.loading) return <div className="sub">Loading…</div>;
    if (state.error) return <div className="sub" style={{ color: '#fca5a5' }}>Error: {state.error}</div>;
    return <pre>{JSON.stringify(state.data, null, 2)}</pre>;
  };

  return (
    <div className="grid">
      <Card title="Finance" subtitle="Live JSON from backend">
        {renderBlock(finance)}
      </Card>

      <Card title="HR" subtitle="Attendance and leave data">
        {renderBlock(hr)}
      </Card>

      <Card title="Inventory" subtitle="Stock levels and valuation">
        {renderBlock(inventory)}
      </Card>

      <Card title="Journey" subtitle="Order → Production → Invoice → Dispatch → Payment">
        {renderBlock(journey)}
      </Card>
    </div>
  );
}

export default Dashboard;
