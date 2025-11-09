import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Dashboard() {
  const [financeData, setFinanceData] = useState({});
  const [hrData, setHrData] = useState({});
  const [inventoryData, setInventoryData] = useState({});
  const [journeyData, setJourneyData] = useState({});

  useEffect(() => {
    axios.get('http://localhost:5000/finance').then(res => setFinanceData(res.data));
    axios.get('http://localhost:5000/hr').then(res => setHrData(res.data));
    axios.get('http://localhost:5000/inventory').then(res => setInventoryData(res.data));
    axios.get('http://localhost:5000/journey').then(res => setJourneyData(res.data));
  }, []);

  return (
    <div className="grid">
      <div className="card">
        <h2>Finance</h2>
        <div className="sub">Live JSON from backend</div>
        <pre>{JSON.stringify(financeData, null, 2)}</pre>
      </div>

      <div className="card">
        <h2>HR</h2>
        <div className="sub">Attendance and leave data</div>
        <pre>{JSON.stringify(hrData, null, 2)}</pre>
      </div>

      <div className="card">
        <h2>Inventory</h2>
        <div className="sub">Stock levels and valuation</div>
        <pre>{JSON.stringify(inventoryData, null, 2)}</pre>
      </div>

      <div className="card">
        <h2>Journey</h2>
        <div className="sub">Order → Production → Invoice → Dispatch → Payment</div>
        <pre>{JSON.stringify(journeyData, null, 2)}</pre>
      </div>
    </div>
  );
}

export default Dashboard;
