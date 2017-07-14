function positive(num) {
    return num >= 0;
}
// Returns only positive numbers in a given array
function justPositives(array) {
    var justPositives = array.filter(positive);
    return justPositives;
}