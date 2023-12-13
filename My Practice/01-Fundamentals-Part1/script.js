/***********************
  "VALUES AND VARIABLES"
************************/

/*console.log("Values and Variables :-");
// (1) Naming Conventions
// a) Camel case allowed.
let myFIrstJob = "Testing";
let myCurrentJob = "Industrial Automation";
console.log(myFIrstJob);
console.log(myCurrentJob);
// b) Special character "_, $" allowed.
let first_name = "Ajay";
let last$name = "Kumar";
console.log(first_name);
console.log(last$name);
// c) Capital variable names shows that it is "constant".
let PI = 3.14;
console.log(PI);*/

/***********************
  "DATATYPES"
************************/

/*console.log("DataTypes :-");
// a) Number.
let age = 30;
console.log(typeof age);
// b) String.
let myName = "Ajay Kumar";
console.log(typeof myName);
// c) Boolean.
let status = true;
console.log(typeof status);
// d) Undefined.
let children;
console.log(typeof children);
// e) Null.
let value = null;
console.log(typeof value);*/

/***********************
  "LET, CONST, VAR"
************************/

/*console.log("Let, Const, Var :-");
// a) Let.
let age = 30;
age = 61;
console.log(age);
// b) Const.
const birthYear = 1993;
// birthYear = 1994;
// const job;
console.log(birthYear);
// c) Var.
var job = "Tester";
job = "Developer";
console.log(job);
// d) Or we can declare variable without any keyword (Not Reccomended).
fatherNames = "Lekh Raj";
console.log(fatherNames);*/

/***********************
  "BASIC OPERATORS"
************************/

/*console.log("Basic Operators :-");
// a) "-" (Subtract)
const currentYear = 2023;
const myAge = currentYear - 1993;
const sarahAge = currentYear - 2012;
console.log(myAge, sarahAge);
// b) "*" (Multiply)
console.log(myAge * 2, sarahAge * 2);
// c) "/" (Divide)
console.log(myAge / 2, sarahAge / 2);
// d) "**" (Power)
console.log(myAge ** 2, sarahAge ** 2);
// e) "+" (Concatenate)
const firstName = "Ajay";
const lastName = "Kumar";
console.log(firstName + " " + lastName);
// f) "typeof" operator
console.log(typeof myAge);
// g) Assignment operator
let subject = "Hindi";
console.log(subject);
let x = 10 + 5; // x=15
x += 10; // i.e. x=x+10 => x= 15+10 =>25
console.log(x);
x *= 10; // i.e. x=x*10 => x= 25*10 =>250
console.log(x);
x -= 10; // i.e. x=x-10 => x= 250-10 =>240
console.log(x);
x /= 10; // i.e. x=x/10 => x= 240/10 =>24
console.log(x);
x++; // i.e. x=x+1 => x= 24+1 =>25
console.log(x);
x--; // i.e. x=x-1 => x= 25-1 =>24
console.log(x);
// h) Comparison operator
console.log(myAge > sarahAge);
console.log(myAge < sarahAge);
console.log(myAge >= sarahAge);
console.log(myAge <= sarahAge);
console.log(myAge == sarahAge);
console.log(currentYear - 1993 > currentYear - 2012);*/

/***********************
  "OPERATORS PRECEDENCE"
************************/

/*********************************
  "STRINGS AND TEMPLATE LITERALS"
**********************************/

/*console.log("Strings and Template Literals :-");
const firstName = "Ajay";
const job = "Software Tester";
const birthYear = 1993;
const currentYear = 2023;
const myAge = currentYear - birthYear;
console.log(
  "Hello I'm " +
    firstName +
    ", a " +
    myAge +
    " year old " +
    "'" +
    job +
    "'" +
    "."
);

const myIntroNew = `I'm ${firstName},.
A ${myAge} year old '${job}!!'.`;
console.log(myIntroNew);*/

/*********************************
  "IF-ELSE STATEMENTS"
**********************************/

/*console.log("If-Else Statements :-");
const eligibleAge = 18;
const age = 18;
const isOldEnough = age >= 18;
if (isOldEnough == true) {
  console.log(`You can apply for driving license.`);
} else {
  const yearsLeft = eligibleAge - age;
  console.log(`You are too young, wait for another ${yearsLeft} years.`);
}

const birthYear = 2001;
let century;

if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);*/

/*********************************
  "TYPE CONERSION AND COERCION"
**********************************/

/* console.log("Type Conversion and Coercion :-");
// By default all the inputs taken by user is in string format.

// Type Conversion
// String to Number.
const inputYear = "1993";
console.log(typeof inputYear);
console.log(inputYear + 18);
const convertedYear = Number(inputYear);
console.log(typeof inputYear);
console.log(typeof convertedYear);
console.log(convertedYear + 18);
console.log(Number("Ajay"));
console.log(typeof NaN);

// Number to String.
const age = 30;
const ageToString = String(age);
console.log(typeof age);
console.log(typeof ageToString);
const concate = age + ageToString;
console.log(concate);

// Type Coercion
// This happens when an operator deals with two different operands.

// "+" operators automatically  converts the "Numbers" into "Strings".
console.log("23" + 10);
// "-" operators automatically converts the "Strings" into "Numbers".
console.log("23" - "10" - 3);
// "*" operators automatically converts the "Strings" into "Numbers".
console.log("10" * "3");
// "*" operators automatically converts the "Strings" into "Numbers".
console.log("10" / "2");

// Example:-
let n = "1" + 1; // n= 11
n = n - 1; // n= 11-1=> 10
console.log(n);
let i = "5" - 1; // i= 4
i = i - 1; // i= 4-1=> 3
console.log(i); */

/*********************************
  "TRUTHY AND FALSY VALUES"
**********************************/
//console.log("Truthy and Falsy values :-");
// 5 Falsy value :- 0, '', undfined, Null, NaN
/*console.log(Boolean(0));
console.log(Boolean(null));
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean("Ajay"));
console.log(Boolean({}));
console.log(Boolean(67));

// const money = 0;
const money = 6;
if (money) {
  console.log(`don't spend it all.`);
} else {
  console.log(`You should get a job!`);
}

let height;
// let height = 23;
if (height) {
  console.log("YAY! height is defined");
} else {
  console.log("Oops! height is not defined.");
}*/

/*********************************
  "EQUALITY OPERATORS == VS ==="
**********************************/
/*console.log("Equality operators == vs. === :-");
// const age = 18;
const age = "18";
if (age === 18) {
  console.log("He is adult!!.");
} else {
  console.log("Not adult yet!!.");
}
if (age == 18) {
  console.log("He is adult!!.");
} else {
  console.log("Not adult yet!!.");
}

// Taking values from the user.
const favourite = prompt("What is your favourite number?"); // Will take the input as string.
// const favourite = Number(prompt("What is your favourite number?")); // Will take the input as number.
console.log(typeof favourite);
if (favourite == 12) {
  // '12'==12
  console.log("Cool!! 12 is an amazing number.");
} else if (favourite == 23) {
  console.log("23 is also an amazing number.");
} else {
  console.log("Please enter the valid number.");
}

let score = "30";
// let score = "30";
if (score !== 30) {
  console.log("Score is not equal to 30.");
} else {
  console.log("Score is equal to 30.");
}*/

/*********************************
  "LOGICAL OPERATORS"
**********************************/
/*console.log("Logical operators :-");
const haveLicence = true;
const haveGoodVision = false;
const isTired = false;
const shouldDrive = haveLicence || haveGoodVision || isTired;
if (shouldDrive) {
  console.log("You should drive.");
} else {
  console.log("You should not drive.");
}*/

/*********************************
  "SWITCH STATEMENT"
**********************************/
/*console.log("Switch Statement :-");

const day = "sunday";
switch (day) {
  case "monday":
    console.log("Today is monday night party!.");
    break;
  case "tuesday":
    console.log("Today is tuesday night party!.");
    break;
  case "wednesday":
  case "thursday":
    console.log("Code for both 'wednesday and thursday'.");
    break;
  case "friday":
    console.log("Today is friday night party!.");
    break;
  case "saturday":
    console.log("Today is saturday night party!.");
    break;
  default:
    console.log("Today is no party!.");
    break;
}*/

// Same code with if-else statement.

/*if (day === "monday") {
  console.log("Today is monday night party!.");
} else if (day === "tuesday") {
  console.log("Today is tuesday night party!.");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Code for both 'wednesday and thursday'.");
} else if (day === "friday") {
  console.log("Today is friday night party!.");
} else if (day === "saturday") {
  console.log("Today is saturday night party!.");
} else {
  console.log("Today is no party!.");
}*/

/*********************************
  "THE CONDITIONAL TERNARY OPERATOR"
**********************************/
console.log("The conditional ternary operator :-");

const age = 18;
// age >= 18
//   ? console.log("You are eligible for taking driving licence.")
//   : console.log("Not eligible for driving licence.");

// const drink = age >= 18 ? "wine" : "water";
// console.log(drink);

console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);
