const prompt = require('prompt-sync')({sigint: true});

console.log("Fibonacci is a pattern where the next number in the sequence is the sum of the two previous numbers.");
let n = Number(prompt("Enter the number of places you'd like to see in your Fibonacci sequence: "));

// we need to start with 0, then 1
// then wee need to add the two most recent numbers in the sequence
//this give us the next number
//reassign variables
//repeat n times.

let num = 0;
let num1 = 1;
let nextNum = 0;

let count = 0;

while(count < n){
    console.log(num); // starts with 0 the first time thru
    nextNum = num + num1; // reassigns to the next number by adding the previous 2 numbers
    num = num1; //reassigns num to the new num1
    num1 = nextNum; //reassigns num1 to = the new next number
    count = count + 1;
}