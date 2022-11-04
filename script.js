// 1. Create four functions, each handles the basics of calculator operations. Call the functions `add()`, `subtract()`, `divide()`, and `multiply()`.
// 2. When the user clicks one of the calculator buttons, call that specific function.
// 3. Run the calcuation using the variables called `firstNumber` and `secondNumber`.
// 4. Display the calculated answer in the `<span>` with the id of **robot-answer**.

// *For example, if the user clicks the Subtract button, you should show "Mr. Robot says: 6"*

let firstNumber = 8
let secondNumber = 2
document.getElementById("number1").textContent = firstNumber
document.getElementById("number2").textContent = secondNumber

let theTotal = document.getElementById("robot-answer")

function add() {
  let result = firstNumber + secondNumber
  theTotal.textContent = "Mr. Robot says " + result
}

function subtract() {
  let result = firstNumber - secondNumber
  theTotal.textContent = "Mr. Robot says " + result
}

function divide() {
  let result = firstNumber / secondNumber
  theTotal.textContent = "Mr. Robot says " + result
}

function multiply() {
  let result = firstNumber * secondNumber
  theTotal.textContent = "Mr. Robot says " + result
}