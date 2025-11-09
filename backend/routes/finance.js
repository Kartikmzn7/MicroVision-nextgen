const express = require('express');
const router = express.Router();
const data = require('../data/finance.json');

// GET /finance → return demo finance data
router.get('/', (req, res) => {
  try {
    res.status(200).json(data);
  } catch (err) {
    console.error('Error fetching finance data:', err);
    res.status(500).json({ error: 'Failed to load finance data' });
  }
});

module.exports = router;
