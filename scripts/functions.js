function positive(num) {
    return num >= 0;
}
// Returns only positive numbers in a given array
function justPositives(array) {
    var justPositive = array.filter(positive);
    return justPositive;
}

function isEven(num) {
    return !(num % 2);
}

// Returns only even numbers in a given array
function justEvens(array) {
    var justEven = array.filter(isEven);
    return justEven;
}

