//let, var, const keywords are used to declare a varibale in javascript
//since javascript is a dynamically typed language so,
//varibale data type depends on data stored in that variable

let x;
x = 100;

var y;
y = 100;

const PI = 3.14

let nameOfPerson = "some examples";

console.log("x value is :" + x);
console.log("y value is :" + y);
console.log("PI value is :", PI);
console.log("name value is :" + nameOfPerson);

let isNumber = true;
console.log(typeof isNumber);

isNumber = "Yes!";
console.log(typeof isNumber);

let year;
console.log("year is ", year);
console.log(typeof year);

const nameOfAPerson = "Vinodh";
const template = `I'm ${nameOfAPerson}`;
console.log(template)

console.log('i am '+ 23 + ' year old');
console.log('23' - '10' - 3);
console.log('23' / '2');
const num = '10' - '4' - '3' - 2 + '5';
console.log("num ",num)

let guessNumber = '1' + 1;
guessNumber -= 1;
console.log(guessNumber);

// 5 falsy values = {0, '', undefined, null, NaN}
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(''));
console.log(Boolean(null));
console.log(Boolean(NaN));

const age = 18;
if (age === 18)
{
    console.log("you just became an adult : strict")
}

if (age == '18')
{
    console.log("you just became an adult : loose")
}

