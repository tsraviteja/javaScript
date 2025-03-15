// 'use strict';

let hasDriversLicense = false;
let passTest = true;

if (passTest) hasDriversLicense = true;  // execute strict mode
if (hasDriversLicense) console.log("I can driver");


function logger() {
    console.log("my name is ravi");
}

// calling / running / invoking function
logger();

function fruitProcessor(apples, oranges){
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apple and ${oranges} oranges`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);


const calcAge = function (birthYear){
    return 2025 - birthYear
}

const age = calcAge(2001);
console.log("Age :", age);

// Arrow function
const age1 = year => 2025 - year;
const age2 = age1(2001);
console.log("Age :", age2);
