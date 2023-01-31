const repeatString = function(string, numberOfRepeats) {
    if (numberOfRepeats < 0) {
        return "ERROR";
    }
    let resultString = "";
    for (let i = 0; i < numberOfRepeats; i++) {
        resultString += string;
    }
    return resultString;
};

// Do not edit below this line
module.exports = repeatString;
