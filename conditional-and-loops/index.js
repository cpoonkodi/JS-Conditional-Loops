let twoNums = prompt("Please enter two numbers (a,b) : ").split(",");
let [num1, num2]=[Number(twoNums[0]),Number(twoNums[1])];
let inputNumber = prompt("Please enter a number to find Odd or Even : ").split(",");

// Function to Find out the larger between two numbers
largerOfTwoNumbers = (num1, num2) => {
  if (num1 > num2) {
    console.log("The larger of "+ num1+ " and "+ num2+ " is "+ num1+ ".");
    return num1;
  }
  else if (num2 > num1) {
    console.log("The larger of "+ num1+ " and "+ num2+ " is "+ num2+ ".");
    return num2;
  }
  else {
    console.log("The values "+ num1+ " and "+num2+ " are equal.");
    return "Equal";
  }
}

// Function to Find out the given number is Odd or Even
isOddOrEven = (inputNumber) => {
  if ((inputNumber%2) === 0) {
    console.log (`The given number ${inputNumber} is Even`);
    return "Even";
  }
  else if ((inputNumber%2)===1) {
    console.log(`The given number ${inputNumber} is Odd`);
    return "Odd";
  }
}

largerOfTwoNumbers(num1,num2);
isOddOrEven(inputNumber);

