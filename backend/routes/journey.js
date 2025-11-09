const express = require('express');
const router = express.Router();
const data = require('../data/journey.json');

// GET /journey → return demo journey data
router.get('/', (req, res) => {
  try {
    res.status(200).json(data);
  } catch (err) {
    console.error('Error fetching journey data:', err);
    res.status(500).json({ error: 'Failed to load journey data' });
  }
});

module.exports = router;
