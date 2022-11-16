require('dotenv').config();
const logger = require('./modules/logger');
const express = require('express');
const { spawn } = require('child_process');
const kyoushinMonitor = require('./cache/KyoushinMonitor');
const kyoushinEEW = require('./cache/KyoushinEEW');
const p2p = require('./cache/P2P');
const app = express();
app.use(logger.express);
app.use(express.urlencoded({
    extended: true,
}));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('success');
});
app.use('/kyoushin', require('./routers/Kyoushin'));
app.use('/quakeinfo', require('./routers/QuakeInfo'));
app.use('/p2p', require('./routers/P2P'));
app.use(function (req, res) {
    res.status(404).end('404');
});

setInterval(() => {
    kyoushinMonitor();
    kyoushinEEW();
    p2p();
}, 1000);

setInterval(() => {
    spawn('php', ['QuakeInfo.php']);
}, 15000);

process.on('unhandledRejection', (reason) => {
    logger.error.error(reason);
});

app.listen(process.env.PORT, () => console.log(`Server Listening http://localhost:${process.env.PORT}`));