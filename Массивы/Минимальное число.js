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
    console.log(
        lines.splice(1)
        .map(a => +a)
        .filter(a => a%10 == 3)
        .sort((a, b) => a - b)[0]
        )
});
