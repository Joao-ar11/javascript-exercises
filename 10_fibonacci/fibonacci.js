const fibonacci = function(count) {
    if (count < 0) return "OOPS";
    if (count == 0) return 0;
    let currentNumber = 1;
    let pastNumber = 0;
    for (let i = 1; i < count; i++) {
        const temp = currentNumber;
        currentNumber += pastNumber;
        pastNumber = temp;
    }
    return currentNumber;
};

// Do not edit below this line
module.exports = fibonacci;
