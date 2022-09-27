const prompt = require('prompt-sync')({sigint: true});

let enterX = Number(prompt("Enter a number you would like to divide: "));
let enterY = Number(prompt(`Enter the number you would like to divide ${enterX} by: `));
let marshMellow = Number();

marshMellow = enterX % enterY;

while(marshMellow != 0){
    enterX++;
    console.log(enterX);
    marshMellow = enterX % enterY;
}
console.log(`${enterX} is divisible by ${enterY}`);

