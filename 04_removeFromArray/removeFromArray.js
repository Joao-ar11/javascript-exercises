const removeFromArray = function(array, ...itemsToBeRemoved) {
    let newArray = [];
    array.forEach((item) => {
        if (!itemsToBeRemoved.includes(item)) {
            newArray.push(item);
        }
    })
    return newArray;

    /*var removeFromArray = function(array, ...args) {
        return array.filter(val => !args.includes(val))
    }*/
}

// Do not edit below this line
module.exports = removeFromArray;
