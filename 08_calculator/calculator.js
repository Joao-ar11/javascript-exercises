const add = function(firstNumber, secondNumber) {
	return firstNumber + secondNumber;
};

const subtract = function(firstNumber, secondNumber) {
	return firstNumber - secondNumber;
};

const sum = function(numberList) {
	return numberList.length ? numberList.reduce((sum, number) => sum += number) : 0;
};

const multiply = function(numberList) {
  return numberList.length ? numberList.reduce((result, number) => result *= number) : 0;
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
