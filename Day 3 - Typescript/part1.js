"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
// function checkChar(string: character): boolean {
//   return ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '[', ']', '{', '}', ';', ':', "'", '"', '\\', '|', ',', '<', '>', '/', '?', '~'].includes(character);
// }
var input = fs.readFileSync('test.txt', 'utf-8');
var lines = input.split('\r\n');
var lineCount = -1;
for (var _i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
    var line = lines_1[_i];
    lineCount++;
    var charCount = -1;
    for (var _a = 0, line_1 = line; _a < line_1.length; _a++) {
        var char = line_1[_a];
        charCount++;
        // console.log(lineCount + "-" + charCount + " " + char + "-" + line[charCount])
        if (!isNaN(Number(char))) {
            if (charCount > 0 && !isNaN(Number(line[charCount - 1])))
                continue;
            var num = "";
            num = num + char;
            if (!isNaN(Number(line[charCount + 1]))) {
                num = num + line[charCount + 1];
                if (!isNaN(Number(line[charCount + 2]))) {
                    num = num + line[charCount + 2];
                }
            }
            console.log(num);
            var numbersCheck = [];
            for (var i = -1; i < 1; i++) {
                if (charCount == 0 && i == -1)
                    continue;
                for (var j = -1; j < 2; j++) {
                    if (lineCount == 0 && j == -1)
                        continue;
                    numbersCheck[i + 1] = [];
                    numbersCheck[i + 1].push(lines[lineCount + j][charCount + i]);
                }
            }
            console.log(numbersCheck);
        }
    }
}
