const fibonacci = function(number) {
    number = +number;
    if (number <= 0) return "OOPS";
    let currentNumber = 1;
    let pastNumber = 0;
    let temp;
    for (let i = 1; i < number; i++) {
        temp = currentNumber;
        currentNumber += pastNumber;
        pastNumber = temp;
    }
    return currentNumber;
};

// Do not edit below this line
module.exports = fibonacci;
