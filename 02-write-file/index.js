const fs = require('fs');
const path = require('path');
const process = require('process');

const readLine = require('readline');
const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});


const filePath = path.join(__dirname, 'output.txt');
const writer = fs.createWriteStream(filePath);

function endProcess() {
  console.log('Good luck! Have fun!');
  process.exit(0);
}

process.on('SIGINT', () => {
  endProcess();
});

rl.on('line', (input) => {
  if (input === 'exit') {
    endProcess();
  }
  writer.write(input + '\n');
});


console.log('Please, type in! Don\'t be shy');
process.stdin.resume();


