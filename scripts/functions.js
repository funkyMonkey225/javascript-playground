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
    return strs.reduce(function(a, sepb) {
            return a + sep + sepb;
        })
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

// Multiplies any string a given number of times
function strMultiply(str, num) {
    var range2 = range(0, num);
    range2 = range2.map(function(str2) {
        return str;
    })
    return strJoin(range2, "");
}

// Returns a box composed of "*"s with a given width and height
function box (width, height) {
    var range3 = range(0, height);
    return strJoin(range3.map(function() {
        return strMultiply("*", width);
    }), "\n");
}

// Sorts given array in alphabetical order
function sortAlpha(array) {
    array.forEach(function(name) {
        array.forEach(function(name2) {
            var swap;
            var indexName = array.indexOf(name2);
            if (name2 > array[indexName + 1]) {
                swap = array[indexName + 1];
                array[indexName + 1] = name2;
                array[indexName] = swap;
            }
            return array;
        });
        return array;
    })
    return array;
}

// Sorts given array by length of each string (shortest => longest)
function sortLength(array) {
    array.forEach(function(name) {
        array.forEach(function(name2) {
            var swap;
            var indexName = array.indexOf(name2);
            var name3 = array[indexName + 1];
            if (name3 !== undefined) {
                if (name2.length > name3.length) {
                    swap = name3;
                    array[indexName + 1] = name2;
                    array[indexName] = swap;
                }
            }
            return array;
        });
        return array;
    })
    return array;
}

// Sorts given array of objects by price (lowest to highest)
function priceSort(array) {
    array.forEach(function(obj) {
        array.forEach(function(obj2) {
            var swap;
            var indexName = array.indexOf(obj2);
            var obj3 = array[indexName + 1];
            if (obj3 !== undefined) {
                if (obj2.price > obj3.price) {
                    swap = obj3;
                    array[indexName + 1] = obj2;
                    array[indexName] = swap;
                }
            }
            return array;
        });
        return array;
    })
    return array;
}

// Passes each item of an array into a given function
function forEach(array, fun) {
    for (var i = 0; i < array.length; i++) {
        fun(array[i]);
    }
}

// Passes each item of array into a given function, returns a new array with those results
function map (array, fun) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
        result.push(fun(array[i]));
    }
    return result;
}

function map2 (array, fun) {
    return array.reduce(fun, []);
}

function map3 (array, fun) {
    var result = [];
    array.forEach(function(x) {
        result.push(fun(x));
    })
    return result;
}
// Passes each item of array into a given function, returns true or false based on function parameters, returns new array with only true items
function filter(array, fun) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
        if (fun(array[i])) {
            result.push(array[i]);
        }
    }
    return result;
}

function filter2(array, fun) {
    return array.reduce(fun, []);
}

function filter3(array, fun) {
    var result = [];
    array.forEach(function(x) {
        if (fun(x)) {
            result.push(x);
        }
    })
    return result;
}

// Starts with initial value, passes each item of array into given function, returns result
function reduce(array, combine, initialValue) {
    var result = initialValue;
    for (var i = 0; i < array.length; i++) {
        result = combine(result, array[i]);
    }
    return result;
}

function cipher(text) {
    var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('')
    var result = '';
}