const log4js = require('log4js');

log4js.configure({
    appenders: {
        out: { type: 'stdout', layout: { type: 'coloured' } },
        app: { type: 'file', filename: 'logs/eewbot-proxy.log', pattern: 'yyyy-MM-dd.log' },
    },
    categories: {
        default: { appenders: ['out', 'app'], level: 'all' },
    },
});

module.exports = {
    access: log4js.getLogger('access'),
    system: log4js.getLogger('system'),
    error: log4js.getLogger('error'),
    express: log4js.connectLogger(log4js.getLogger('access'), { level: log4js.levels.INFO }),
};