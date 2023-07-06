"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatCommandLine = void 0;
var sn;
sn = 'Codemind';
sn = 7;
sn = true;
function formatCommandLine(input) {
    var line = '';
    if (typeof input === 'string') {
        line = input.trim();
    }
    else {
        line = input.map(function (x) { return x.trim(); }).join(' ');
        // this map method creates a new array with the results 
        // input.map is not a function 
    }
    return line;
}
exports.formatCommandLine = formatCommandLine;
console.log(formatCommandLine('hello '));
console.log(formatCommandLine(['hello ', 'world ']));
console.log(formatCommandLine(123456));
function newTypeAnotation(input) {
}
newTypeAnotation(true);
