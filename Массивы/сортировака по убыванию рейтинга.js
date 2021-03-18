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
    let x = parseInt(lines[0]);
    let arr = lines
        .splice(1)
        .map(item => item.split(';'))
        .sort((a, b) => +(b[1]) - +a[1]);
    console.log(arr[x-1][0]);
});
