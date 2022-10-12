const express = require('express');
const { readFileSync } = require('fs');
const router = express.Router();

router.get('/', async (req, res) => {
    const quakeInfoData = readFileSync('dat/p2p.json');
    res.type('json');
    res.send(quakeInfoData);
});

module.exports = router;