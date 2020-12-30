// a good practice is to always get required modules into a const
// in order to ensure you do not accidentally override the value of an import
const logger = require('./logger');

logger.log('the message');

// console.log(logger);
// [2020-12-30 16:50:20][/d/Code/nodejs/youtube/pgmwithmosh] (master)> node use-logger.js 
// Module {
//   id: 'D:\\Code\\nodejs\\youtube\\pgmwithmosh\\logger.js',
//   path: 'D:\\Code\\nodejs\\youtube\\pgmwithmosh',
//   exports: { log: [Function: log], endpoint: 'http://mylogger.io/log' },
//   parent: Module {
//     id: '.',
//     path: 'D:\\Code\\nodejs\\youtube\\pgmwithmosh',
//     exports: {},
//     parent: null,
//     filename: 'D:\\Code\\nodejs\\youtube\\pgmwithmosh\\use-logger.js',
//     loaded: false,
//     children: [ [Circular] ],
//     paths: [
//       'D:\\Code\\nodejs\\youtube\\pgmwithmosh\\node_modules',
//       'D:\\Code\\nodejs\\youtube\\node_modules',
//       'D:\\Code\\nodejs\\node_modules',
//       'D:\\Code\\node_modules',
//       'D:\\node_modules'
//     ]
//   },
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
// { log: [Function: log], endpoint: 'http://mylogger.io/log' }
