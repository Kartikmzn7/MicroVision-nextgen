const express = require('express');
const router = express.Router();
const data = require('../data/inventory.json');

// GET /inventory → return demo inventory data
router.get('/', (req, res) => {
  try {
    res.status(200).json(data);
  } catch (err) {
    console.error('Error fetching inventory data:', err);
    res.status(500).json({ error: 'Failed to load inventory data' });
  }
});

module.exports = router;
