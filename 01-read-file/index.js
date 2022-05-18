const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'text.txt');
const reader = fs.createReadStream(filePath);


reader.on('data', (chunk) => {
  console.log('' + chunk);
});

reader.on('error', (err) => {
  console.log(err.stack);
});
