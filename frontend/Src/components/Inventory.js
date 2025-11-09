import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

function Inventory() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/inventory').then(res => setData(res.data));
  }, []);

  // Chart.js dataset
  const chartData = {
    labels: data.map(item => item.product), // assuming backend returns { product, stock }
    datasets: [
      {
        label: 'Stock Levels',
        data: data.map(item => item.stock),
        backgroundColor: ['#22c55e', '#3b82f6', '#f59e0b', '#ef4444', '#8b5cf6'],
      },
    ],
  };

  return (
    <div className="card">
      <h2>Inventory Module</h2>
      <div className="sub">Stock distribution (pie chart)</div>
      <Pie data={chartData} />
      <div className="sub">Raw JSON</div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default Inventory;
