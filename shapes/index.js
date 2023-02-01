
// Dynamic input 
/*
let sideOfSquare = prompt("Please enter side of square ");
let sidesOfTriangle = prompt("Please enter sides of trianlge (a,b,c) : ").split(",");
let [sideOne, sideTwo, sideThree] = [Number(sidesOfTriangle[0]),Number(sidesOfTriangle[1]),Number(sidesOfTriangle[2])];
let radius = prompt("Please enter Radius of circle ");
*/

// Static input
let sideOfSquare = 9;
let sideOne = 5;
let sideTwo = 6;
let sideThree = 7;
let radius = 4;

// Function to Calculate the Diagnal of Square
diagonalofSquareFunc = (sideOfSquare) => {
  let diagonalofSquare = sideOfSquare * Math.SQRT2;
  console.log(`The diagonal of a square where the length of each side is ${sideOfSquare} is : `, diagonalofSquare);
  console.log("≈", diagonalofSquare.toFixed(5));
  return diagonalofSquare;
}

// Function to Calculate the Area of Triangle
areaOfTraiangleFunc = (sideOne, sideTwo, sideThree) => {
  let semiPerimeter = (sideOne + sideTwo + sideThree)/2;
  let areaOfTriangle = Math.sqrt(semiPerimeter*((semiPerimeter-sideOne)*(semiPerimeter-sideTwo)*(semiPerimeter-sideThree)));
  console.log(`The area of a triangle where lengths of the three of its
  sides are ${sideOne}, ${sideTwo} and ${sideThree} is : `, areaOfTriangle);
  console.log("≈", areaOfTriangle.toFixed(5));
  return areaOfTriangle;
}

// Function to Calculate the Area of Circle
areaOfCircleFunc = (radius) => {
  let areaOfCircle = Math.PI * radius * radius;
  console.log(`Area of Circle whose radius is ${radius} is : `, areaOfCircle);
  console.log("≈", areaOfCircle.toFixed(5));
  return areaOfCircle;
}

// Function to Calculate the Circumference of Circle
circumferenceOfCircleFunc = (radius) => {
  let circumferenceOfCircle = 2 * Math.PI * radius;
  console.log(`Circumference of Circle whose radius is ${radius} is : `, circumferenceOfCircle);
  console.log("≈", circumferenceOfCircle.toFixed(5));
  return circumferenceOfCircle;
}

diagonalofSquareFunc(sideOfSquare);
areaOfTraiangleFunc(sideOne, sideTwo, sideThree);
circumferenceOfCircleFunc(radius);
areaOfCircleFunc(radius);


