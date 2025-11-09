import React, { useEffect, useState } from 'react';
import axios from 'axios';

function HR() {
  const [data, setData] = useState({});

  useEffect(() => {
    axios.get('http://localhost:5000/hr').then(res => setData(res.data));
  }, []);

  return (
    <div>
      <h2>HR Module</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default HR;
