const add = function(firstNumber, secondNumber) {
	return firstNumber + secondNumber;
};

const subtract = function(firstNumber, secondNumber) {
	return firstNumber - secondNumber;
};

const sum = function(numberList) {
	let sum = 0;
  for (let i in numberList) {
    sum += numberList[i];
  }
  return sum;
};

const multiply = function(numberList) {
  let result = 1;
  for (let i in numberList) {
    result *= numberList[i];
  }
  return result;
};

const power = function(firstNumber, secondNumber) {
	result = 1;
  for (let i = 0; i < secondNumber; i++) {
    result *= firstNumber;
  }
  return result;
};

const factorial = function(number) {
	result = 1;
  for (let i = 1; i <= number; i++) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
