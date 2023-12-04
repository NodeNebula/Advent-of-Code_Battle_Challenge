import * as fs from 'fs';

function containsSym(arr: string[][]): boolean {
  const symList: string[] = ['@', '*', '/', '#', '+', '-', '&', '=', '$', '%', '&'];
  
  for (const row of arr) {
    for (const char of row) {
      if (symList.includes(char)) return true;
    }
  }
  return false;
}

const input = fs.readFileSync('input.txt', 'utf-8');
const lines = input.split('\r\n');

let total: number = 0;

let lineCount: number = -1;
for (const line of lines) {
  lineCount++;

  let charCount: number = -1;
  for (const char of line) {
    charCount++;
    
    if (!isNaN(Number(char))) {
      if (charCount > 0 && !isNaN(Number(line[charCount - 1]))) continue;

      let num: string = "";

      num = num + char;
      if (!isNaN(Number(line[charCount + 1]))) {
        num = num + line[charCount + 1];
        if (!isNaN(Number(line[charCount + 2]))) {
          num = num + line[charCount + 2];
        }
      }

      const checkLenght: number = num.length + 2;
      let numberCheck: string[][] = [];
      
      for (let i = 0; i < 3; i++) {
        numberCheck[i] = [];
        for (let j = 0; j < checkLenght; j++) {
          try {
            numberCheck[i].push(lines[lineCount + i - 1][charCount + j - 1]);
          } catch (TypeError) {
            numberCheck[i].push();
          }
        }
      }
      if (containsSym(numberCheck)) {
        total += Number(num);
      }
    }
  }
}
console.log(total);
