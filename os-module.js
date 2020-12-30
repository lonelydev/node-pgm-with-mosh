const os = require('os');

var osStats = {};
osStats.totalMemory = os.totalmem();
osStats.freeMemory = os.freemem();

console.table(osStats);