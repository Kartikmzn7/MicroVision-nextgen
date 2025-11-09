import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

function Finance() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/finance').then(res => setData(res.data));
  }, []);

  // Chart.js dataset
  const chartData = {
    labels: data.map((item, idx) => `Q${idx + 1}`), // Quarter labels
    datasets: [
      {
        label: 'Revenue',
        data: data.map(item => item.revenue), // assuming backend returns { revenue: number }
        borderColor: '#22c55e',
        backgroundColor: 'rgba(34,197,94,0.2)',
        tension: 0.3,
      },
    ],
  };

  return (
    <div className="card">
      <h2>Finance Module</h2>
      <div className="sub">Revenue trends (line chart)</div>
      <Line data={chartData} />
      <div className="sub">Raw JSON</div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default Finance;
