const axios = require('axios');
const { writeFileSync } = require('fs');
const { getEEWTime } = require('../utils/Time');
const remoteURL = 'http://www.kmoni.bosai.go.jp/webservice/hypo/eew/';

module.exports = async () => {
    try {
        const eewResponse = await axios.get(`${remoteURL}${getEEWTime(-1)}.json`);
        writeFileSync('dat/eew.json', JSON.stringify(eewResponse.data));
    }
    // eslint-disable-next-line no-empty
    catch (e) {
    }
};