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

function coolCities(array) {
    var result = array.filter(tempCheck);
    return result;
}

function getCityNames(obj) {
    return obj.name;
}

function cityNames(array) {
    var result = array.map(getCityNames);
    return result;
}


// for (var i = 0; i < cities.length; i++) {
//     if (cities[i][temperature] < 70.0) {
//         coolCities.push(cities[i][name]);
//     }
//     return coolCities;
// }
  
