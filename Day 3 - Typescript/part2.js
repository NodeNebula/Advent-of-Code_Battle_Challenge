"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var input = fs.readFileSync('input.txt', 'utf-8');
var lines = input.split('\r\n');
var total = 0;
var lineCount = -1;
for (var _i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
    var line = lines_1[_i];
    lineCount++;
    var charCount = -1;
    for (var _a = 0, line_1 = line; _a < line_1.length; _a++) {
        var char = line_1[_a];
        charCount++;
        if (char != '*')
            continue;
        var numberCheck = [];
        for (var i = 0; i < 3; i++) {
            numberCheck[i] = [];
            for (var j = 0; j < 7; j++) {
                try {
                    numberCheck[i].push(lines[lineCount + i - 1][charCount + j - 3]);
                }
                catch (TypeError) { }
            }
        }
        var numberList = [];
        var nextNum = 0;
        for (var i = 0; i < numberCheck.length; i++) {
            for (var j = 0; j < numberCheck[i].length; j++) {
                if (j < 1 && numberCheck[i][1] === ".")
                    j = 2;
                if (j < 2 && numberCheck[i][2] === ".")
                    j = 3;
                if (j === 4 && numberCheck[i][j] === ".")
                    break;
                if (j === 5 && numberCheck[i][j] === ".")
                    break;
                if (numberCheck[i][j] === undefined || numberCheck[i][j] === ".")
                    continue;
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
        if (numberList.length < 2)
            continue;
        total += Number(numberList[0]) * Number(numberList[1]);
    }
}
console.log(total);
// 73662618 too low
// 73662618
