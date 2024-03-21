#! /usr/bin/env node
import Inquirer from "inquirer";

const answer = await Inquirer.prompt([
  { message: "Enter yours first number", type: "number", name: "firstNumber" },
  { message: "Enter yours second number", type: "number", name: "secondNumber" },
  {
    message: "Select one of the operators to perform the action",
    type: "list",
    name: "operators",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);

// Conditional statement
if (answer.operators === "Addition") {
  console.log(answer.firstNumber + answer.secondNumber);
} else if (answer.operators === "Subtraction") {
  console.log(answer.firstNumber - answer.secondNumber);
} else if (answer.operators === "Multiplication") {
  console.log(answer.firstNumber * answer.secondNumber);
} else if (answer.operators === "Division") {
  console.log(answer.firstNumber / answer.secondNumber);
} else {
  console.log("Please select a valid operator.");
}
console.log("the end");