// CHALLENGE :-
// SOLUTION :-
// PROBLEM :-
// EXAMPLE :-
// TOPIC :-
// CASE :-
// CODE :-
// NOTE :-

// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// TOPIC :-
// Using Google, Stackoverflow, and MDN.

// PROBLEM :-
/* We work for a company building a smart home thermometer.
Our most recent task is this:" Given an array of tempratures of one day, 
calculate the temprature amplitude. Keep in mind that sometimes there 
might be a sensor error."*/

const tempratures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

/* 1.) Understand the problem :-
       - What is temprature amplitude?
       Answer.) Difference between heighest and lowest temprature.
       - How to caculate "Max and Min" temprature?
       - What's a sensor error? and what to do?

   2.) Breaking up into sub-problems :-
       - How to ignore 'error'?
       - Find Max value in temprature array?
       - Find Min value in temprature array?
       - Subtract Min from Max and return it?
*/
// SOLUTION :-

let maxTemp = tempratures[0];
for (let i = 1; i <= tempratures.length; ++i) {
  if (typeof tempratures[i] !== "string") {
    if (maxTemp < tempratures[i]) {
      maxTemp = tempratures[i];
    }
  }
}

let minTemp = tempratures[0];
for (let i = 1; i <= tempratures.length; ++i) {
  if (typeof tempratures[i] !== "string") {
    if (minTemp > tempratures[i]) {
      minTemp = tempratures[i];
    }
  }
}
console.log(maxTemp);
console.log(minTemp);
