const path = require('path');
var pathObj = path.parse(__filename);
console.log(pathObj);

// [2020-12-30 18:40:40][/d/Code/nodejs/youtube/pgmwithmosh] (master)> node path-module.js 
// {
//   root: 'D:\\',
//   dir: 'D:\\Code\\nodejs\\youtube\\pgmwithmosh',
//   base: 'path-module.js',
//   ext: '.js',
//   name: 'path-module'
// }