let name = "Julio";

function multiply(num1, num2) {
  const result = num1 * num2;
  console.log("num1 = ", num1);
  console.log("num2 = ", num2);
  console.log("num1 * num2 = ", result);
}

function add(num1, num2) {
  let newNum1 = Number(num1);
  let newNum2 = Number(num2);
  const result = newNum1 + newNum2;
  console.log("num1 = ", newNum1);
  console.log("num2 = ", newNum2);
  console.log("num1 * num2 = ", result);
}

multiply(1, 3);

console.log("--------------------");

let number1 = prompt("Number 1:");
let number2 = prompt("Number 2:");

multiply(number1, number2);

add(number1, number2);
