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

// Finance route (requires ./routes/finance and ./data/finance.json)
try {
  app.use('/finance', require('./routes/finance'));
} catch (e) {
  console.warn('Finance route not loaded yet. Create backend/routes/finance.js and backend/data/finance.json');
}

// Future modules (uncomment when routes exist)
// app.use('/hr', require('./routes/hr'));
// app.use('/inventory', require('./routes/inventory'));
// app.use('/journey', require('./routes/journey'));

app.listen(PORT, () => {
  console.log(`MicroVision ERP backend running on port ${PORT}`);
});
