const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Sample route
app.get('/', (req, res) => {
  res.send('MicroVision ERP backend is running ✅');
});

app.listen(PORT, () => {
  console.log(`MicroVision ERP backend running on port ${PORT}`);
});
