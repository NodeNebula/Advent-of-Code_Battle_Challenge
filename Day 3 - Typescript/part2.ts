import * as fs from 'fs';

const input = fs.readFileSync('input.txt', 'utf-8');
const lines = input.split('\r\n');

let total: number = 0;

let lineCount: number = -1;
for (const line of lines) {
  lineCount++;

  let charCount: number = -1;
  for (const char of line) {
    charCount++;

    if (char != '*') continue;

    let numberCheck: string[][] = [];

    for (let i = 0; i < 3; i++) {
      numberCheck[i] = [];
      for (let j = 0; j < 7; j++) {
        try {
          numberCheck[i].push(lines[lineCount + i - 1][charCount + j - 3]);
        } catch (TypeError) {}
      }
    }

    let numberList: string[] = [];
    let nextNum: number = 0;

    for (let i = 0; i < numberCheck.length; i++) {
      for (let j = 0; j < numberCheck[i].length; j++) {

        if (j < 1 && numberCheck[i][1] === ".") j = 2;
        if (j < 2 && numberCheck[i][2] === ".") j = 3;
        if (j === 4 && numberCheck[i][j] === ".") break;
        if (j === 5 && numberCheck[i][j] === ".") break;

        if (numberCheck[i][j] === undefined || numberCheck[i][j] === ".") continue;
        
        if (!isNaN(Number(numberCheck[i][j]))) {
          numberList[nextNum] = numberCheck[i][j];
          if (!isNaN(Number(numberCheck[i][j + 1]))) {
            j++;
            numberList[nextNum] += numberCheck[i][j];
            if (!isNaN(Number(numberCheck[i][j + 1]))) {
              j++;
              numberList[nextNum] += numberCheck[i][j];
              nextNum++;
            }
            else {
              nextNum++;
            }
          }
          else {
            nextNum++;
          }
        }
        
      }
    }
    if (numberList.length < 2) continue;
    total += Number(numberList[0]) * Number(numberList[1]);
  }
}

console.log(total);
