let age = prompt("Your age:");

console.log(age);

if (age > 18) {
  console.log("He is +18");
}

let name = prompt("Your name");

if (name == "Julio" && age == 26) {
  console.log("He is Julio AND it's 26");
} else if (name == "Julio" || age == 26) {
  console.log("He is OR Julio OR 26 (one of them)");
} else {
  console.log("NOT Julio and NOT 26");
}

console.log("---------------------");

console.log(typeof age);
console.log(age + 100000);

console.log("---------------------");

let numberAge = Number(age);
console.log(typeof numberAge);
console.log(numberAge + 100000);

console.log("---------------------");

if (age === 18) {
  console.log("Age = 18 and Type = number");
} else if (age === "18") {
  console.log("Age = 18 and Type = string");
}

if (numberAge === 18) {
  console.log("numberAge = 18 and Type = number");
}
