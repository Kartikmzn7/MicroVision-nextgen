const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Health check
app.get('/', (req, res) => {
  res.send('MicroVision ERP backend is running ✅');
});

// Finance route
app.use('/finance', require('./routes/finance'));

// HR route
app.use('/hr', require('./routes/hr'));

// Inventory route (newly added)
app.use('/inventory', require('./routes/inventory'));

// Future modules (uncomment when ready)
// app.use('/journey', require('./routes/journey'));

app.listen(PORT, () => {
  console.log(`MicroVision ERP backend running on port ${PORT}`);
});
