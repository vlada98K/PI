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
    let len = result.split(' ').length;
    sum = result.split(' ')
        .map(a => +a)
        .reduce((acc, next) => acc + next);
    let namber = (sum - (len * (len - 1) /2));
    console.log(namber);
});
