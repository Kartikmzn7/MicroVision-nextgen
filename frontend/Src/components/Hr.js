import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

function HR() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/hr').then(res => setData(res.data));
  }, []);

  // Chart.js dataset
  const chartData = {
    labels: data.map(emp => emp.name), // assuming backend returns { name, leaves }
    datasets: [
      {
        label: 'Leaves Taken',
        data: data.map(emp => emp.leaves),
        backgroundColor: '#3b82f6',
      },
    ],
  };

  return (
    <div className="card">
      <h2>HR Module</h2>
      <div className="sub">Attendance and leave data (bar chart)</div>
      <Bar data={chartData} />
      <div className="sub">Raw JSON</div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default HR;
