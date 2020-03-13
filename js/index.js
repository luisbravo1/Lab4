let input = document.getElementById('input');
let resultInput = document.getElementById('resultValue');
let log = document.getElementById('logInformation');
let addBtn = document.getElementById('addButton');
let subBtn = document.getElementById('substractButton');
let divideBtn = document.getElementById('divisionButton');
let multiplyBtn = document.getElementById('multiplicationButton');
let equalBtn = document.getElementById('equalButton');
let resetBtn = document.getElementById('resetButton');
let result = 0;
let operations = [''];
let index = 0;

function getNumber() {
  const input = document.getElementById('input').value;
  if (input === "" || isNaN(input)) {
    window.alert(input + ' is not a number');
    return false;
  }
  return true;
}

function clear() {
  logInformation.innerHTML = '';
  result = 0;
  resultInput.value = '';
  input.value = '';
  operations[index] = '';
}

function logOperation() {
  logInformation.innerHTML += operations[index] + "\n";
  operations[index] = ''
  input.value = '';
  result = 0;
}

function operation(operator) {
  if (getNumber()) {
    var curr = operations[index]
    var len = operations[index].length

    if (len < 1) {
      result += Number(input.value)
      operations[index] += input.value + ' ' + operator + ' ';
    } else { 
      switch(curr[len-2]) {
        case '+': 
          result += Number(input.value)
          operations[index] += input.value + ' ' + operator + ' ';
          break;
        case '-': 
          result -= Number(input.value)
          operations[index] += input.value + ' ' + operator + ' ';
          break;
        case '/': 
          result /= Number(input.value)
          operations[index] += input.value + ' ' + operator + ' ';
          break;
        case '*': 
          result *= Number(input.value)
          operations[index] += input.value + ' ' + operator + ' ';
          break;
      }
      if (operations[index][operations[index].length-2] === '=') {
        operations[index] += result;
        resultInput.value = result;
        logOperation();
      }
    }
    input.value = '';
  }
}

addBtn.addEventListener('click', function() {
  operation('+');
})

subBtn.addEventListener('click', function() {
  operation('-');
})

divideBtn.addEventListener('click', function() {
  operation('/');
})

multiplyBtn.addEventListener('click', function() {
  operation('*');
})

equalBtn.addEventListener('click', function() {
  operation('=');
})

resetBtn.addEventListener('click', function () {
  clear();
})