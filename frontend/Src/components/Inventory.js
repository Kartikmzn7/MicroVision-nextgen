import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Inventory() {
  const [data, setData] = useState({});

  useEffect(() => {
    axios.get('http://localhost:5000/inventory').then(res => setData(res.data));
  }, []);

  return (
    <div>
      <h2>Inventory Module</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default Inventory;
