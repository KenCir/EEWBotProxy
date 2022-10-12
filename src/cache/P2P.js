const axios = require('axios');
const { writeFileSync } = require('fs');
const remoteURL = 'https://api.p2pquake.net/v2/';

module.exports = async () => {
    // 現在は551と552のみ
    const response = await axios.get(`${remoteURL}history?codes=551&codes=552`);
    writeFileSync('dat/p2p.json', JSON.stringify(response.data));
};