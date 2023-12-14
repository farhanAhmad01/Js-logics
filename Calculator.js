const add = document.getElementById("add");
const subtract = document.getElementById("subtract");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");

let a = 10;
let b = 3;

add.addEventListener("click", () => {
  console.log(`Your Addition of ${a}+${b} = ${a + b} `);
});
subtract.addEventListener("click", () => {
  console.log(`Your Subtraction of ${a}-${b} = ${a - b} `);
});
multiply.addEventListener("click", () => {
  console.log(`Your Multiplication of ${a}*${b} = ${a * b} `);
});

divide.addEventListener("click", () => {
  console.log(`Your Division of ${a}/${b} = ${a / b} `);
});
