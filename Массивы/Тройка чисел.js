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
               .sort((a, b)  => a - b)
               .splice(0, 3)
               .reduce((acc, next) => acc+next);
    console.log(result);
});
