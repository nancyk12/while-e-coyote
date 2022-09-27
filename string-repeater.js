const prompt = require('prompt-sync')({sigint: true});

const input = String(prompt("Enter a string: "));
let stringInput = input;

while (stringInput.length <= 10){
    console.log(stringInput);
    stringInput = stringInput + input;
}

console.log(stringInput);
//Write a program that takes a string and 'repeats it' until the string's length is greater than or equal to 10.