var url='http://mylogger.io/log'

function log(message){
    console.log(message);
}

// the variable and the function are both private to the file. 
// to make the methods accessible from outside, you have to export them individually. 

module.exports.log = log;
module.exports.endpoint = url;

console.log(module);

// [2020-12-30 16:33:13][/d/Code/nodejs/youtube/pgmwithmosh] (master)> node logger.js
// Module {
//   id: '.',
//   path: 'D:\\Code\\nodejs\\youtube\\pgmwithmosh',
//   exports: { log: [Function: log], endpoint: 'http://mylogger.io/log' },
//   parent: null,
//   filename: 'D:\\Code\\nodejs\\youtube\\pgmwithmosh\\logger.js',
//   loaded: false,
//   children: [],
//   paths: [
//     'D:\\Code\\nodejs\\youtube\\pgmwithmosh\\node_modules',
//     'D:\\Code\\nodejs\\youtube\\node_modules',
//     'D:\\Code\\nodejs\\node_modules',
//     'D:\\Code\\node_modules',
//     'D:\\node_modules'
//   ]
// }