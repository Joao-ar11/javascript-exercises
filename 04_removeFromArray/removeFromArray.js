const removeFromArray = function(array, ...itemsToBeRemoved) {
    for (let i = 0; i < itemsToBeRemoved.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j] === itemsToBeRemoved[i]) {
                array.splice(j, 1);
                j--;
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
