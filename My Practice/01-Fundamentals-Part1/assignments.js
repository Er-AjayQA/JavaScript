/***********************
  "Values and Variables"
************************/
console.log("Values and Variables :-");
const country = "India";
const continent = "Asia";
let population = 165;
// let population = 30;
console.log(country);
console.log(continent);
console.log(population);

/***********************
    "DataTypes"
************************/

console.log("DataTypes :-");
const isIsland = true;
let language;
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

/***********************
    "Let, Const and Var"
************************/

language = "Hindi";

/***********************
    "Basic Operators"
************************/

const halfPopulation = population / 2;
console.log(halfPopulation);
population++;
console.log(population);
const finlandPopulation = 6;
console.log(population > finlandPopulation);
const averagePopulation = 33;
console.log(population < averagePopulation);

const description =
  country +
  " is in " +
  continent +
  ", and it's " +
  population +
  " million people speaks " +
  language;
console.log(description);

/***********************************
    "Strings and Template Literals"
************************************/
const descriptionNew = `${country} is in ${continent}, and it's ${population} million people speaks ${language}`;
console.log(descriptionNew);

/***********************************
    "If-Else Statements"
************************************/

const isAboveAverage = population > averagePopulation;
if (isAboveAverage == true) {
  console.log(`${country}'s population is above average.`);
} else {
  const belowAverageCount = averagePopulation - population;
  console.log(
    `${country}'s population is ${belowAverageCount} million below the average.`
  );
}

/***********************************
    "Type Conversion and Coercion"
************************************/
console.log("9" - "5");
console.log("19" - "13" + "17");
console.log("19" - "13" + 17);
console.log("123" < 57);
console.log(5 + 6 + "4" + 9 - 4 - 2);

/***********************************
    "Equality Operators: == vs. ==="
************************************/
const numNeighbours = Number(
  prompt("How many neighbour countries does your country have?")
);
if (numNeighbours === 1) {
  console.log("Only 1 border!");
} else if (numNeighbours > 1) {
  console.log("More than 1 border");
} else {
  console.log("No borders.");
}
