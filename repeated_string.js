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
 * Complete the 'repeatedString' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. LONG_INTEGER n
 */

function repeatedString(s, n) {
    let slength = s.length;

    /* Número de repetiçoes nescessarias para atingir "n" caracteres */
    let sRepeat = Math.trunc(n / slength);
    
    /* Qtd. de caracteres que ultrapassaram que sobram alem de repetições */
    let sOver = n - (sRepeat * slength);

    let qtdA = 0;
    
    for (var i = 0; i < s.length; i++) {
        if (s[i] == "a" ) {
            /* Para cada ocorrência de "a" sera incrementado a quantidade de repetições de "s" */
            qtdA += sRepeat + (i < sOver ? 1 : 0);
        }  
    }
    
    return qtdA;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const n = parseInt(readLine().trim(), 10);

    const result = repeatedString(s, n);

    ws.write(result + '\n');

    ws.end();
}
