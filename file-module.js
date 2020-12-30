const fs = require('fs');

// example use of a sync method
// const files = fs.readdirSync('./');
// console.table(files);

// lets take a look at an async function. 

fs.readdir('blah', function(err, files){
  if (err) {
      console.error(err);
  }else{
      console.table(files);
  }
});
