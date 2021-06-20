'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */

function countingValleys(steps, path) {
    let altitude = 0;
    let valley = 0;
    let mountain = 0;
    
    for(let i = 0; i < steps; i++) {
        if(path[i] === 'U') {
            if (altitude === 0) {
                mountain++;
            }
            altitude++;
        } else if (path[i] === 'D') {
            /* Um novo vale só inicia quando iniciar um declive a partir do nível do mar. */
            if(altitude === 0) {
                valley++;
            }
            altitude--;
        }
    }
    
    return valley;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const steps = parseInt(readLine().trim(), 10);

    const path = readLine();

    const result = countingValleys(steps, path);

    ws.write(result + '\n');

    ws.end();
}
