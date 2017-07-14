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

function letterHistogram(word) {
    var wordLower = word.toLowerCase();
    var letters = {};
    
    for (var i = 0; i < wordLower.length; i++) {
        char = wordLower[i];
        if (!(char in letters)) {
            letters[char] = 1;
        } else if (char in letters) {
            letters[char] += 1;
        }
    }
    return letters;
}

function wordHistogram(phrase) {
    var phraseLower = phrase.toLowerCase();
    var phraseLower = phrase.split(" ");
    var wordCount = {};

    for (var i = 0; i < phraseLower.length; i++) {
        word = phraseLower[i];
        if (!(word in wordCount)) {
            wordCount[word] = 1;
        } else if (word in wordCount) {
            wordCount[word] += 1;
        }
    }
    return wordCount;
}
