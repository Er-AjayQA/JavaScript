/*****************
  CHALLENGE #1
*****************/
/*console.log("CHALLENGE #1");

// Data Set 1
const markWeight = 78;
const markHeight = 1.69;
const johnWeight = 92;
const johnHeight = 1.95;
// Data Set 2
// const markWeight = 95;
// const markHeight = 1.88;
// const johnWeight = 85;
// const johnHeight = 1.76;
const markBMI = markWeight / markHeight ** 2;
const johnBMI = johnWeight / johnHeight ** 2;
const markHigherBMI = markBMI > johnBMI;
console.log(markBMI, johnBMI, markHigherBMI);*/

/*****************
  CHALLENGE #2
*****************/
/*console.log("CHALLENGE #2");

if (markHigherBMI == true) {
  console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI}).`);
} else {
  console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI}).`);
}*/

/*****************
  CHALLENGE #3
*****************/

console.log("CHALLENGE #3");

// Data Set 1
// Dolphins
// const dolphinScore1 = 96;
// const dolphinScore2 = 108;
// const dolphinScore3 = 89;
// Koalas
// const koalasScore1 = 88;
// const koalasScore2 = 91;
// const koalasScore3 = 110;

// Data Set 2
// Dolphins
// const dolphinScore1 = 97;
// const dolphinScore2 = 112;
// const dolphinScore3 = 101;

// Koalas
// const koalasScore1 = 109;
// const koalasScore2 = 95;
// const koalasScore3 = 106;

// Data Set 3
// Dolphins
// const dolphinScore1 = 97;
// const dolphinScore2 = 112;
// const dolphinScore3 = 101;

// Koalas
// const koalasScore1 = 109;
// const koalasScore2 = 95;
// const koalasScore3 = 123;
// const dolphinsAverageScore =
//   (dolphinScore1 + dolphinScore2 + dolphinScore3) / 3;
// console.log(`Dolphins average score ${dolphinsAverageScore}`);
// const koalasAverageScore = (koalasScore1 + koalasScore2 + koalasScore3) / 3;
// console.log(`Koalas average score ${koalasAverageScore}`);

// const draw = dolphinsAverageScore === koalasAverageScore;
// const dolphinWins = dolphinsAverageScore > koalasAverageScore;
// const koalaWins = dolphinsAverageScore < koalasAverageScore;

// if (draw) console.log("The Series has been draw.");

// if (dolphinWins) console.log("Dolphins wins the Series.");

// if (koalaWins) console.log("Koalas wins the Series.");

/*****************
  CHALLENGE #4
*****************/
console.log("CHALLENGE #4");
// let total;

// Data Set 1
// const billValue = 275;

// Data Set 2
const billValue = 49;

// Data Set 3
// const billValue = 430;

const tip = console.log(
  `${billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2}`
);
