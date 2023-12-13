"use strict";
/***************************************
      "STRICT MODE"
 ***************************************/
/*console.log("Strict Mode :-");
let hasDriversLicence = false;
const passTest = false;

if (passTest) hasDriverLicence = true;

if (hasDriversLicence) console.log("Can drive the vehicle");
else console.log("can't drive the vehicle.");

const interface = "Audio";
const audioDevice = "Audio"; */

/***************************************
      "FUNCTIONS"
 ***************************************/
/*console.log("Functions :-");
function logger() {
  console.log("My name is johnas!");
}

const output = logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `juice of ${apples} apples!! and ${oranges} oranges!!.`;
  return juice;
}

const ingredient = fruitProcessor(23, 40); // calling function and store the return value in variable.
console.log(ingredient);

console.log(fruitProcessor(5, 4)); // Directly console the function output.*/

/***********************************************
    "FUNCTIONS DECLARATIONS VS. EXPERESSIONS"
 ***********************************************/
/*console.log("Functions Declarations vs. Expressions :-");

// Function Declaration

const age1 = calcAge1(1994); // "Function Declarations" can be called before the function initialized.
function calcAge1(dateOfBirth) {
  // const currentYear = 2023;
  return 2023 - dateOfBirth;
}
console.log(age1);

// Function Expression
// console.log(age2(1995)); // "Function Expressions" cant' be called before the function is initialized.
const age2 = function calcAge2(dateOfBirth) {
  return 2023 - dateOfBirth;
};
console.log(age2(1995));*/

/************************
    "ARROW FUNCTIONS"
 ************************/
/*console.log("Arrow Functions :-");

// Normal Function
const age2 = function calcAge2(dateOfBirth) {
  return 2023 - dateOfBirth;
};

// Arrow Function
const age3 = (birthYear) => 2023 - birthYear;
console.log(age3(1993));

const yearsUntilRetirement = (firstName, birthYear) => {
  return `${firstName} retires after ${60 - (2023 - birthYear)} years.`;
};
console.log(yearsUntilRetirement("Ajay", 1994));*/

/**************************************
    "FUNCTIONS CALLING OTHER FUNCTION"
 **************************************/
/*console.log("Functions Calling Other Functions :-");

const calcAge = (birthYear) => {
  const age = 2023 - birthYear;
  return age;
};
const yearsLeftForRetirement = (birthYear) => {
  const yearsLeft = 60 - calcAge(birthYear);
  return yearsLeft;
};
const calcRetirementYear = (birthYear, retirementYearLeft) => {
  const retirementYear = 2023 + yearsLeftForRetirement(birthYear);
  return retirementYear;
};

const options = prompt(
  "Select any 1 option from the following :-\n(1.) What is my Age?\n(2.) How many Years left for retirement?\n(3.) In which year I get retired?"
);

const birthYear = Number(prompt("Please enter your date-of-birth."));
switch (options) {
  case "1":
    const age = calcAge(birthYear);
    console.log(`Your age is ${age}`);
    break;
  case "2":
    const yearsLeft = yearsLeftForRetirement(birthYear);
    console.log(`You will retired after ${yearsLeft}`);
    break;
  case "3":
    const retirementYear = calcRetirementYear(birthYear);
    console.log(`You will retire in ${retirementYear}`);
    break;
  default:
    console.log("Invalid input!");
    break;
}*/

/*const cutApplePieces = (apples) => {
  return apples * 5;
};
const cutOrangePieces = (oranges) => {
  return oranges * 2;
};
const juice = (apples, oranges) => {
  return `Juice is made up of ${cutApplePieces(
    apples
  )} pieces of "apples" and ${cutOrangePieces(oranges)} pieces of "oranges".`;
};
console.log(juice(10, 10));*/

/**************
    "ARRAYS"
 **************/
/*console.log("Arrays :-");
const friends = ["Ajay", "Vijay", "Rahul", "Raman"];
console.log(friends);
console.log(friends[2]);
console.log(friends[1]);
console.log(friends.length);
// friends = ["asfsdfsd", "asdsdf", "fsdfs", "dd"];    // Can't reassign the const array like this.
friends[3] = "Kirti";
console.log(friends);

const years = new Array(1991, 1992, 1993, 1994, 1995);
console.log(years);
console.log(years[2]);
console.log([years.length - 1]);

const dateOfBirth = 1993; // Variables can be given in the array.
const myInfo = ["Ajay", "Kumar", dateOfBirth, 2023 - 1993, friends];
console.log(myInfo);
console.log(myInfo[4]);
console.log(myInfo.length);

const birthYears = [1993, 2012, 1989, 1999];

const calcAge = (birthYear) => {
  const age = 2023 - birthYear;
  return age;
};
console.log(calcAge(birthYears[2]));

const ages = [
  calcAge(birthYears[0]),
  calcAge(birthYears[1]),
  calcAge(birthYears[2]),
  calcAge(birthYears[3]),
];
console.log(ages);*/

/****************************
    "BASIC ARRAY OPERATIONS"
 ****************************/
/*console.log("Basic Array operations :-");
const friends = ["Ajay", "Vijay", "Komal", "Satish"];
console.log("Before Push :-" + friends);
// Add elements to array
const newLength = friends.push("Kiran"); // Push() method.
console.log("After Push :-" + friends);
console.log(newLength);
const lengthOfArray = friends.unshift("Happy"); // unshift() method.
console.log(friends);
console.log(lengthOfArray);

// Remove elements from array
const removedElement = friends.pop(); // Pop() method.
console.log(friends);
console.log(`The removed element is :- ${removedElement}`);

friends.shift();
console.log(friends);

// Index of elements in array
console.log(friends.indexOf("Komal")); // indexOf() method.

// Includes method
console.log(friends.includes("Komal")); // includes() method.
friends.push(23);
console.log(friends.includes(23));

if (friends.includes("Komal")) {
  console.log(`You have a friend called "Komal".`);
}*/

/***************
    "OBJECTS"
 ***************/
/*console.log("Objects :-");

// Array
const myInfo = [
  "Ajay",
  "Kumar",
  1993,
  2023 - 1993,
  ["Komal", "Kiran", "Rajeev"],
];

// Object
const myEmpInfo = {
  firstName: "Ajay",
  lastName: "Kumar",
  dateOfBirth: 1993,
  age: 2023 - 1993,
  friends: ["Komal", "Kiran", "Rashmi"],
};
console.log(myEmpInfo);*/

/*******************************
    "DOT VS. BRACKET NOTATION"
 *******************************/
/*console.log("Dot Vs. Bracket Notation :-");
const myEmpInfo = {
  firstName: "Ajay",
  lastName: "Kumar",
  dateOfBirth: 1993,
  age: 2023 - 1993,
  friends: ["Komal", "Kiran", "Rashmi"],
};
// console.log(myEmpInfo.firstName);
// console.log(myEmpInfo.firstName + " " + myEmpInfo.lastName);
// console.log(myEmpInfo["firstName"]);

// const nameKey = "Name";
// console.log(myEmpInfo["first" + nameKey]);
// console.log(myEmpInfo["last" + nameKey]);

// const options = prompt(
//   "What do you know about me? Choose one of the following :-\n(1.) firstName.\n(2.) lastName.\n(3.) dateOfBirth.\n(4.) age.\n(5.) friends."
// );
// console.log(options);
// console.log(myEmpInfo[options]);

// if (myEmpInfo[options]) {
//   console.log(myEmpInfo[options]);
// } else {
//   console.log("Kindly select the valid option.");
// }

myEmpInfo.location = "Punjab"; // Add new property to the object by "dot".
myEmpInfo["currentLocation"] = "New Delhi"; // Add new property to the object by "Bracket Notation".
console.log(myEmpInfo);

// challenge
// "Ajay has 3 friend, and his best friend is Komal"
console.log(
  `${myEmpInfo["firstName"]} has ${myEmpInfo.friends.length} friends, and his best friend is "${myEmpInfo.friends[0]}".`
);*/

/*******************************
    "OBJECT METHODS"
 *******************************/
// console.log("Object Methods :-");

// Case:-1 without "this" keyword.
// const myEmpInfo = {
//   firstName: "Ajay",
//   lastName: "Kumar",
//   birthYear: 1993,
//   friends: ["Komal", "Kiran", "Rashmi"],
//   hasDriverLicence: true,
//   calcAge: function () {
//     return 2023 - birthYear;
//   },
// };
// console.log(myEmpInfo.calcAge(myEmpInfo.birthYear)); // Calling the object method.
// console.log(myEmpInfo["calcAge"](1992));

// Case:-2 Using "object" keyword.
// const myEmpInfo = {
//   firstName: "Ajay",
//   lastName: "Kumar",
//   birthYear: 1993,
//   friends: ["Komal", "Kiran", "Rashmi"],
//   hasDriverLicence: true,
//   calcAge: function () {
//     return 2023 - myEmpInfo.birthYear;
//   },
// };
// console.log(myEmpInfo.calcAge()); // Calling the object method.

// Case:-3 Using "this" keyword.
// const myEmpInfo = {
//   firstName: "Ajay",
//   lastName: "Kumar",
//   birthYear: 1993,
//   friends: ["Komal", "Kiran", "Rashmi"],
//   hasDriverLicence: true,
//   calcAge: function () {
//     // console.log(this);
//     return 2023 - this.birthYear; // Here "this" keyword points to the same object.
//   },
// };
// console.log(myEmpInfo.calcAge()); // Calling the object method.
// console.log(myEmpInfo.calcAge());
// console.log(myEmpInfo.calcAge());
// console.log(myEmpInfo.calcAge());

// Case:-4 Using the function only once and store it as variable in object

// Challenge
// "Ajay is 30-year old tester, and he has a/no drivers licence."
// const myEmpInfo = {
//   firstName: "Ajay",
//   lastName: "Kumar",
//   job: "Tester",
//   birthYear: 1993,
//   friends: ["Komal", "Kiran", "Rashmi"],
//   hasDriverLicence: false,
//   calcAge: function () {
//     this.age = 2023 - this.birthYear;
//     return this.age;
//   },
//   getSummary: function () {
//     return `${this.firstName} is "${this.calcAge()}" year old "${
//       this.job
//     }", and he has ${this.hasDriverLicence ? "a" : "no"} drivers licence.`;
//   },
// };
// console.log(myEmpInfo.getSummary());

/*******************************
    "ITERATIONS: THE FOR LOOP"
 *******************************/
/*console.log("Iterations: The For Loop :-");

// Example:-
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep}`);
}

const friends = ["Komal", "Kiran", "Rashmi", "Satish", "Vinay"];

for (let count = 0; count < friends.length; count++) {
  console.log(friends[count]);
}*/

/*********************************************
    "LOOPING ARRAYS, BREAKING AND CONTINUING"
 *********************************************/
/*console.log("Looping Arrays, Breaking And Continuing :-");

// Case 1
// const myInfo = ["Ajay", "Kumar", 1993, 30, "Tester"];
// const type = [];
// for (let i = 0; i <= myInfo.length - 1; i++) {
//   if (i <= 2) {
//     console.log(myInfo[i]);
//     type.push(typeof myInfo[i]);
//   } else {
//     break;
//   }
//   // type[i] = typeof myInfo[i];
// }
// console.log(type);

// Case 2
// const years = [1991, 1992, 1987, 2002, 1967];
// const currentYear = 2023;
// const ages = [];

// const age = (year) => {
//   return currentYear - year;
// };
// for (let i = 0; i <= years.length - 1; i++) {
//   // ages[i] = age(years[i]);
//   ages.push(age(years[i]));
// }
// console.log(ages);

// const myInfo = ["Ajay", "Kumar", 1993, 30, "Tester"];
// Continue Statement

// for (let i = 0; i <= myInfo.length - 1; i++) {
//   if (typeof myInfo[i] === "number") {
//     continue;
//   }
//   console.log(myInfo[i]);
// }

// Break Statement
// for (let i = 0; i <= myInfo.length - 1; i++) {
//   if (typeof myInfo[i] === "number") {
//     break;
//   } else {
//     console.log(myInfo[i]);
//   }
// }*/

/*********************************************
    "LOOPING BACKWARDS AND LOOPS IN LOOP"
 *********************************************/
/*console.log("Looping Backwards and Loops In Loop :-");

// const myInfo = [
//   "Ajay",
//   "Kumar",
//   1993,
//   30,
//   "Tester",
//   ["Rajeev", "Komal", "Poonam", "Happy"],
// ];

// Backward Iteration
// for (let i = myInfo.length - 1; i >= 0; i--) {
//   console.log(myInfo[i], typeof myInfo[i]);
// }

// Loops Inside the Loop
// for (let i = 1; i <= 3; i++) {
//   console.log(`Starting Excercise ${i} :-`);
//   for (let j = 1; j <= 5; j++) {
//     console.log(`Rep ${j}`);
//   }
// }*/

/*********************************************
    "THE WHILE LOOP"
 *********************************************/
console.log("The While Loop :-");

// For Loop
// for (let i = 1; i <= 10; i++) {
//   console.log(`For Loop ${i} :-`);
// }

// While Loop
// let i = 1;
// while (i <= 10) {
//   console.log(`While Loop ${i} :-`);
//   i++;
// }

// Roll Dice
let diceCount = Math.trunc(Math.random() * 6) + 1;
while (diceCount !== 6) {
  console.log(diceCount);
  diceCount = Math.trunc(Math.random() * 6) + 1;
  if (diceCount === 6) {
    console.log(diceCount);
    console.log("Loop is about to end!.");
  }
}
