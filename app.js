// let num = 42 // number
// let firstName = 'Aleksandr' // string
// const isProgrammer = true // boolean

// console.log(firstName ,isProgrammer)
// console.log(num + 10)
// let num2 = num + 10
// console.log(num, num2)
// num = num2 - num
// num2 = num2 + 1
// console.log(num, num2)

// let num3 = num + (10 * 2) / 5 - 1
// console.log(num3)

// const fullName = firstName + ' Pelipeckiy'
// const fullName = firstName + ' ' + 'Pelipeckiy'
// console.log(fullName)

const resultElemet = document.getElementById("result");
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const submitBtn = document.getElementById("submit");
const btnSuccess = document.getElementById("plus");
const btnDanger = document.getElementById("minus");
let action = "+";

// console.log(resultElemet.textContent)
// resultElemet.textContent = 42

// console.log(typeof sum)

// submitBtn.onclick = function () {
//     const sum = Number(input1.value) + Number(input2.value)
//     resultElemet.textContent = sum
// }

btnSuccess.onclick = function () {
  action = "+"
}

btnDanger.onclick = function () {
  action = "-"
}

function printResult(result) {
  if (result < 0) {
    resultElemet.style.color = 'red'
  } else { 
    resultElemet.style.color = 'green' 
  }
  resultElemet.textContent = result
}

function computeNumbersWidthAction(inp1, inp2, actionSymbol) {
  const num1 = Number(inp1.value)
  const num2 = Number(inp2.value)
  if (actionSymbol == '+') {
    return num1 + num2
  }

  if (actionSymbol == '-') {
    return num1 - num2
  }
}

submitBtn.onclick = function () {
  const result = computeNumbersWidthAction(input1, input2, action)
  printResult(result)
    // if (action == '+') {
    //   const sum = Number(input1.value) + Number(input2.value);
    //   printResult(sum)
    // }

    // else if (action == '-') {
    //   const sum = Number(input1.value) - Number(input2.value);
    //   printResult(sum)
    // }
}
