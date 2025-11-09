const express = require('express');
const router = express.Router();
const data = require('../data/inventory.json');

router.get('/', (req, res) => {
  res.json(data);
});

module.exports = router;
