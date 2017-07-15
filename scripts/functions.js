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

function multiply(a, b) {
    return a * b;
}

// Returns product of given array
function product(array) {
    return array.reduce(multiply, 1);
}

function getPrice(obj) {
    return obj.price;
}

function sum(a, b) {
    return a + b;
}

// Returns the total price of products within an object inside a given array
function total(array) {
    var prices = array.map(getPrice);
    return prices.reduce(sum, 0);
}



// Returns given string plus given separator
function strJoin(strs, sep) {
    var str1 = strs.reduce(function (a, sepb) {
        if (a === "") {
            return a + sepb;
        } else if (a !== "") {
            return a + sep + sepb;
        }
    }, "");
    return str1;
}

function getFirstLetter(obj) {
    return obj[0];
}
// Makes acronym of first letters of words in a given array.
function acronym(array) {
    var firstLettStr = array.map(getFirstLetter);
    return strJoin(firstLettStr, "").toUpperCase();
}

function range(min, max) {
  var arr = [];
  for (var i = min; i < max; i++) {
    arr.push(i);
  }
  return arr;
}

function strMultiply(str, num) {
    var range = range(0, num);
    console.log(strArray);
    var result = strJoin(strArray, "");
    return result;
}


// function box (width, height) 


// function compare(name) {
//     var name2;
//     if (name > name2) {
//         name2 = name; 
//         return True;
//     } else {

//     }
// }
// function arraySort1(array) {

// }

// Passes each item of an array into a give function
function forEach(array, fun) {
    for (var i = 0; i < array.length; i++) {
        fun(array[i]);
    }
}

function map (array, fun) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
        result.push(fun(array[i]));
    }
    return result;
}