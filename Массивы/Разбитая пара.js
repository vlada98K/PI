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
    let result = lines[0];
    console.log(result.split(' ')
        .sort((a, b) => b - a)
        .reduce((acc, next) => acc ^ next));
});
