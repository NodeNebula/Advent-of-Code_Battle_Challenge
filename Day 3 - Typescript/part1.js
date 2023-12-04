"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
function containsSym(arr) {
    var symList = ['@', '*', '/', '#', '+', '-', '&', '=', '$', '%', '&'];
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var row = arr_1[_i];
        for (var _a = 0, row_1 = row; _a < row_1.length; _a++) {
            var char = row_1[_a];
            if (symList.includes(char))
                return true;
        }
    }
    return false;
}
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
            var checkLenght = num.length + 2;
            var numberCheck = [];
            for (var i = 0; i < 3; i++) {
                numberCheck[i] = [];
                for (var j = 0; j < checkLenght; j++) {
                    try {
                        numberCheck[i].push(lines[lineCount + i - 1][charCount + j - 1]);
                    }
                    catch (TypeError) {
                        numberCheck[i].push();
                    }
                }
            }
            if (containsSym(numberCheck)) {
                total += Number(num);
                // console.log(num)
            }
        }
    }
}
console.log(total);
// 523459 too low
