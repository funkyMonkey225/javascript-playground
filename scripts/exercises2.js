function printNumbers(start, end) {
    while(start <= end) {
        console.log(start);
        start += 1;
    }
}

function printSquare(size) {
    var i = 1;
    while (i <= size) {
        console.log("*".repeat(size));
        i += 1;
    }
}

function printBox(width, height) {
    console.log("*".repeat(width));
    var i = 1;
    while (i <= (height - 2)) {
        console.log("*" + (" ".repeat(height - 2)) + "*");
        i += 1;
    }
    console.log("*".repeat(width));
}

function printBanner(text) {
    var width = text.length;
    console.log("*".repeat(width + 4));
    console.log("*" + " " + text + " " + "*");
    console.log("*".repeat(width + 4));
}

function factors(number) {
    var i = 1;
    console.log("The factors of " + number + " are:")
    while (i <= number) {
        if (number % i === 0) {
            console.log(i);
        }
        i += 1;
    }
}

function cipherDecipher(text, offset) {
    var alpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var y = "";
    var cipherText = "";              
    var upperText = text.toUpperCase();
    var i = 0;

    while (i < text.length) {
        var char = upperText[i];
        var j = 0;
        while (j < alpha.length) {
            if (char === alpha[j]) {
                if (j <= (offset-1)) {
                    y = alpha[j + offset];
                    cipherText = cipherText + y;
                    break;   
                } else {
                    y = alpha[j - 26 + offset];
                    cipherText = cipherText + y;
                    break; 
                }

            } else if (j === alpha.length - 1) {
                cipherText = cipherText + char;
            }
            j += 1;
        }
        i += 1;
    }
    console.log(cipherText);
}

function leetSpeak(text) {
    var lettersToConvert = ["A", "E", "G", "I", "O", "S", "T"];
    var numbers = [4, 3, 6, 1, 0, 5, 7];
    var translation = "";
    var uppercaseText = text.toUpperCase();
    
    for (var i = 0; i < uppercaseText.length; i++) {
        var letterToAdd = "";

        for (var j = 0; j < lettersToConvert.length; j++) {
            if (uppercaseText[i] === lettersToConvert[j]) {
                letterToAdd = String(numbers[j]);
                break;
            } else {
                letterToAdd = uppercaseText[i];
            }
        }
        translation += letterToAdd;
    }
    return translation;
}

function longLongVowels(text) {
    var longVow = text.toUpperCase();
    var savedvowel = "";
    var s = "";
    var i = 0;
    while (i < longVow.length) {              
        var vowel = longVow[i];          
        if (vowel === "A") {               
            if (savedvowel === vowel) {
                s = s + vowel.repeat(4);        
            } else {                      
                s = s + vowel;
            }           
            savedvowel = vowel;     
            
        } else if (vowel === "E") {
            if (savedvowel === vowel) {
                s = s + vowel.repeat(4);
            } else {
                s = s + vowel;
            }
            savedvowel = vowel;

        } else if (vowel === "I") {
            if (savedvowel === vowel) {
                s = s + vowel.repeat(4);  
            } else {
                s = s + vowel;
            }
            savedvowel = vowel;

        } else if (vowel === "O") {
            if (savedvowel === vowel) {
                s = s + vowel.repeat(4);
            } else {
                s = s + vowel;
            }
            savedvowel = vowel;

        } else if (vowel === "U") {
            if (savedvowel === vowel) {
                s = s + vowel.repeat(4);
            } else {
                s = s + vowel;
            }
            savedvowel = vowel;
        } else {                       
            s = s + vowel;
            savedvowel = "";
        }
        i += 1;
    }
    console.log(s);          
}

function sumNumbers(numbers) {
    var i = 0;
    var total = 0;
    while (i < numbers.length) {
        total += numbers[i];
        i++;
    }
    return total;
}

function positiveNumbers(numbers) {
    var i = 0;
    var positives = [];
    while (i < numbers.length) {
        if (numbers[i] >= 0) {
            positives.push(numbers[i]);
        }
        i++;
    }
    return positives;
}

function matrixAdd(matrix1, matrix2) {
    var newMatrix = [];
    var i = 0;
    while (i < matrix1.length) {
        newMatrix.push([]);
        var j = 0;
        while (j < matrix1.length) {
            newMatrix[i].push(matrix1[i][j] + matrix2[i][j]);
            j += 1;
        }
        i += 1;
    }
    return newMatrix;
}

function matrixMultiply(matrix1, matrix2) {
    var newMatrix = [];
    var temp = [];
    var sums = 0;
    var i = 0;
    while (i < matrix1.length) {
        var j = 0;
        while (j < matrix1.length) {
            var k = 0;
            while (k < matrix1.length) {
                sums = sums + (matrix1[i][k] * matrix2[k][j]);
                k++;
            }
            temp.push(sums);
            sums = 0;
            j++;
        }
        newMatrix.push(temp);
        temp = [];
        i++;
    }
    return newMatrix;
}

function rockPaperScissors(player1, player2) {
    player1.toLowerCase();
    player2.toLowerCase();
    methods = ["rock", "paper", "scissors"];
    if (player1 === player2) {
        return "draw";
    } else if (player1 === "rock" &&)
}