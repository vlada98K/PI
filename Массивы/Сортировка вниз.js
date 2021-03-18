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
               .sort((a, b)  => b - a);
    console.log(...result);
});
