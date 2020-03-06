/*
	Prime Notes Week 7 Lecture 1
	Monday 2, 2020
*/

console.log('Test!');


//Data Types
//Variable Declaration use let and const
let number = 7;
let stringNumber = '7';
const NUMBER_SEVEN = 7;

//Can't add numbers and strings
console.log("Add a number and string number", number + stringNumber);

//Can add number + number
console.log("Add a number and number", number + number);

//=== must match value and type
//== must match value, but type can be different
number === stringNumber;
number == stringNumber;

let firstName = "Jaden";
let lastName = "Reklaw"
let fullName = `${firstName} ${lastName}`;

console.log("Name is", fullName);

//arrays & loops
let numbers = [2,5,8,0,2];
for(let number of numbers) {
	console.log(number);
}

//Doesn't work on arrays will send you an index
for(let number in numbers) {
	console.log(numbers[number]);
}

for(let i = 0; i < numbers.length; i++) {
	console.log( numbers[i]);
}

let x = 0;
while (x < numbers.length) {
	console.log(numbers[x]);
	x++;
}
//Function Definition
function subtractTwo(input) {
	return input - 2
}

//Call the function, run the funciotn
let result =  subtractTwo(10);
console.log(`Result from subtractTwo is:`,result);

//Function expression
//using a variable to hold your nameless(anonymous) functions
let subtractThree = function(input) {
	return input - 3;
}

let result2 = subtractThree(10);
console.log('Result from subtractThree is:', result2);




















