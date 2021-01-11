let firstNum = null
let secondNum = null
let operation = null


const saveFirstNumber = (num) => {
  firstNum = parseInt(num)  
}


const saveSecondNumber = (num) => {
  secondNum = parseInt(num)
}

const add = (numA, numB) => {
  const sum = numA + numB
  return sum
}

const subtract = (numA, numB) => {
  const difference = numA - numB
  return difference
}

const multiply = (numA, numB) => {
  const multiplication = numA * numB
  return multiplication
}

const divide = (numA, numB) => {
  const division = numA / numB
  return division
}
  

const modulus = (numA, numB) => {
  const modulus = numA % numB
  return modulus
}


const changeOperation = (chosenOperation) => {
  operation = chosenOperation
  console.log(operation)
}

const putResultInElement = (operationResults) => {
  document.getElementById("result").innerHTML = "Results: " + operationResults
}

const equals = () => {
  switch (operation) {
    case "addition":  putResultInElement(add(firstNum, secondNum)) 
    break;
    case "subtraction": putResultInElement(subtract(firstNum, secondNum)) 
    break;
    case "multiplication": putResultInElement(multiply(firstNum, secondNum)) 
    break;
    case "division": putResultInElement(divide(firstNum, secondNum)) 
    break;
    case "modulus": putResultInElement(modulus(firstNum, secondNum)) 
    break;
    default: "Choose an operation"
  }
}

