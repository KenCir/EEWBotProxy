const express = require('express');
const { readFileSync } = require('fs');
const router = express.Router();

router.get('/monitor', async (req, res) => {
    const monitor = readFileSync('dat/nowMonitor.png');
    res.type('png');
    res.send(monitor);
});

router.get('/eew', async (req, res) => {
    const eewData = readFileSync('dat/eew.json');
    res.type('json');
    res.send(eewData);
});

module.exports = router;