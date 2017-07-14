// var phonebookDict = {
//   Alice: '703-493-1834',
//   Bob: '857-384-1234',
//   Elizabeth: '484-584-2923'
// };

// console.log(phonebookDict["Elizabeth"]);
// phonebookDict["Kareem"] = "938-489-1234";
// delete phonebookDict["Alice"];
// var personName = "Elizabeth";
// phonebookDict[personName];

// // Prints all keys and phonebook entries
// var key;
// for (key in phonebookDict) {
//     console.log(key + ": " + phonebookDict[key]);
// }

var lowerCase = function (phrase) {
    return phrase.toLowerCase();
}

function divide(lowerCase) {
    return lowerCase.split();
}

function letterHistogram(phrase) {
    phrase.toLowerCase();
    var letterCount = {};
    
    for (var i = 0; i < phrase.length; i++) {
        char = phrase[i];
        if (!(char in letters)) {
            letters[char] = 1;
        } else if (char in letters) {
            letters[char] += 1;
        }
    }
}
