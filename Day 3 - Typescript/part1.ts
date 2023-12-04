import * as fs from 'fs';

// function checkChar(string: character): boolean {
//   return ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '[', ']', '{', '}', ';', ':', "'", '"', '\\', '|', ',', '<', '>', '/', '?', '~'].includes(character);
// }

const input = fs.readFileSync('test.txt', 'utf-8');
const lines = input.split('\r\n');

let lineCount: number = -1;
for (const line of lines) {
  lineCount++;

  let charCount: number = -1;
  for (const char of line) {
    charCount++;
    
      // console.log(lineCount + "-" + charCount + " " + char + "-" + line[charCount])
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
      console.log(num);

      let numbersCheck: string[][] = [];

      for (let i = -1; i < 1; i++) {
        if (charCount == 0 && i == -1) continue;
        for (let j = -1; j < 2; j++) {
          if (lineCount == 0 && j == -1) continue;

          numbersCheck[i + 1] = [];
          numbersCheck[i + 1].push(lines[lineCount + j][charCount + i]);
        }
      }
      console.log(numbersCheck);

    }
  }
}