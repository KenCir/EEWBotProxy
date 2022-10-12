// 強震モニタ用の時間(yyyyMMdd--)を取得
function getMonitorTime(offset) {
    const date = new Date(new Date().toLocaleString('JST'));
    date.setSeconds(date.getSeconds() - (offset + 1));

    return `${date.getFullYear()}${('0' + (date.getMonth() + 1)).slice(-2)}${('0' + date.getDate()).slice(-2)}/${date.getFullYear()}${('0' + (date.getMonth() + 1)).slice(-2)}${('0' + date.getDate()).slice(-2)}${('0' + date.getHours()).slice(-2)}${('0' + date.getMinutes()).slice(-2)}${('0' + (date.getSeconds() - 1)).slice(-2)}`;
}

// EEW用の時間(yyyyMMdd--)を取得
function getEEWTime(offset) {
    const date = new Date(new Date().toLocaleString('JST'));
    date.setSeconds(date.getSeconds() - (offset + 1));

    return `${date.getFullYear()}${('0' + (date.getMonth() + 1)).slice(-2)}${('0' + date.getDate()).slice(-2)}${('0' + date.getHours()).slice(-2)}${('0' + date.getMinutes()).slice(-2)}${('0' + (date.getSeconds() - 1)).slice(-2)}`;
}

module.exports = { getMonitorTime, getEEWTime };