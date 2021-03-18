var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let lines = [];

rl.on('line', function(line){
    lines.push(line);
});

rl.on('close', () => {
   let result = lines[0]
               .split(' ')
               .map(a => +a)
               .filter(a => a%2 != 0);
    console.log(...result);
});
