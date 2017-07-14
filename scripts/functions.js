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

function squared(num) {
    return num * num;
}

// Returns only squared numbers in a given array
function squaredArray(array) {
    var result = array.map(squared);
    return result;
}

var cities = [
    { name: 'Beaumont', temperature: 97.0 },
    { name: 'Atlanta', temperature: 91.0 },
    { name: 'Madison', temperature: 68.0 },
    { name: 'Anchorage', temperature: 60.0 },
    { name: 'Seattle', temperature: 68.0 },
    { name: 'San Diego', temperature: 80.0 }
];

function tempCheck(obj) {
    return  obj.temperature < 70.0;
}

// Returns array of names of cities whose temperature is under 70 degrees
function coolCitiesNames(array) {
    var result = array.filter(tempCheck);
    var justNames = cityNames(result);
    return justNames;
}

// Returns array of names and temperatures of cities whose temperature is under 70 degrees
function coolCities(array) {
    var result = array.filter(tempCheck);
    return result;
}


function getCityNames(obj) {
    return obj.name;
}

// Returns array of city names
function cityNames(array) {
    var result = array.map(getCityNames);
    return result;
}

function printNames(name) {
    console.log("Good Job, " + name + "!");
}

// Prints out "Good Job, ____!" for any thing in a given array
function goodJob(array) {
    return array.forEach(printNames);
}
// Calls a function 3 times
function call3Times(fun) {
    fun();
    fun();
    fun();
}

function helloWorld() {
    console.log("Hello, world!");
}

// Calls a function a specified number (num) of times
function callNTimes(num, fun) {
    for (var i = 0; i < num; i++) {
        fun();
    }
}