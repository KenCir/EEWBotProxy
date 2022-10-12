const express = require('express');
const { readFileSync, writeFileSync } = require('fs');
const router = express.Router();

router.post('/update', async (req, res) => {
    writeFileSync('dat/quakeinfo.json', JSON.stringify(req.body));
    res.status(204).end();
});

router.get('/quakeinfo', async (req, res) => {
    const quakeInfoData = readFileSync('dat/quakeinfo.json');
    res.type('json');
    res.send(quakeInfoData);
});

module.exports = router;