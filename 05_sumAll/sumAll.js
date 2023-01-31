const sumAll = function(initial, end) {
    if (typeof(initial) !== "number" || typeof(end) !== "number") {
        return "ERROR";
    }
    if (initial < 0 || end < 0) {
        return "ERROR";
    }
    let sum = 0;
    let currentNumber = initial;
    while (currentNumber !== end) {
        sum += currentNumber;
        if (initial < end) {
            currentNumber++;
        } else {
            currentNumber--;
        }
    }
    return sum + end;
};

// Do not edit below this line
module.exports = sumAll;
