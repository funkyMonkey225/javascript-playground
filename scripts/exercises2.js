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
    var vowels = {"A": "AAAA", "E": "EEEE", "I":"IIII", "O":"OOOO", "U":"UUUU"};
    var savedvowel = "";
    var s = "";
    var i = 0;
    while (i < longVow.length) {              
        var vowel = longVow[i];
        if (vowel in vowels) {
            if (savedvowel === vowel) {
                s = s + vowels[vowel];        
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
    return s; 
}
        
    //     if (vowel === "A") {               
    //         if (savedvowel === vowel) {
    //             s = s + vowel.repeat(4);        
    //         } else {                      
    //             s = s + vowel;
    //         }           
    //         savedvowel = vowel;     
            
    //     } else if (vowel === "E") {
    //         if (savedvowel === vowel) {
    //             s = s + vowel.repeat(4);
    //         } else {
    //             s = s + vowel;
    //         }
    //         savedvowel = vowel;

    //     } else if (vowel === "I") {
    //         if (savedvowel === vowel) {
    //             s = s + vowel.repeat(4);  
    //         } else {
    //             s = s + vowel;
    //         }
    //         savedvowel = vowel;

    //     } else if (vowel === "O") {
    //         if (savedvowel === vowel) {
    //             s = s + vowel.repeat(4);
    //         } else {
    //             s = s + vowel;
    //         }
    //         savedvowel = vowel;

    //     } else if (vowel === "U") {
    //         if (savedvowel === vowel) {
    //             s = s + vowel.repeat(4);
    //         } else {
    //             s = s + vowel;
    //         }
    //         savedvowel = vowel;
    //     } else {                       
    //         s = s + vowel;
    //         savedvowel = "";
    //     }
    //     i += 1;
    // }
    // console.log(s);          


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

function playAgain(input) {
    input = prompt("Would you like to play again? ('yes' or 'no')");
    input = input.toLowerCase();
    if (input === "yes") {
        rockPaperScissors();
    } else if (input === "no") {
        return console.log("Goodbye!");
    } else {
        console.log("Invalid input.");
        playAgain();
    }
}

function rockPaperScissors() {
    var player1 = prompt("Player 1's move: ");
    var player2 = prompt("Player 2's move: ");
    var result = "";
    player1 = player1.toLowerCase();
    player2 = player2.toLowerCase();
    
    if (player1 === player2) {
        result = "Draw";
    } else if (player1 === "rock" && player2 === "paper") {
        result = "Player 2 wins!";
    } else if (player1 === "rock" && player2 === "scissors") {
        result = "Player 1 wins!";
    } else if (player1 === "paper" && player2 === "rock") {
        result = "Player 1 wins!";
    } else if (player1 === "paper" && player2 === "scissors") {
        result = "Player 2 wins!";
    } else if (player1 === "scissors" && player2 === "rock") {
        result = "Player 2 wins!";
    } else if (player1 === "scissors" && player2 === "paper") {
        result = "Player 1 wins!";
    } else {
        console.log("Invalid input. Please choose one: 'rock', 'paper', or 'scissors'");
        rockPaperScissors();
    }
    console.log(result);
    playAgain();
}


function ticTacToe(userArray) {
    var result = "";
    if (userArray[0][0] === userArray[0][1] && userArray[0][1] === userArray[0][2]) {
        if (!null) {
            result = userArray[0][0] + " wins!";
        } else {
            result = null;
        }
    } else if (userArray[1][0] === userArray[1][1] && userArray[1][1] === userArray[1][2]) {
        if (!null) {
            result = userArray[1][0] + " wins!";
        } else {
            result = null;
        }
    } else if (userArray[2][0] === userArray[2][1] && userArray[2][1] === userArray[2][2]) {
        if (!null) {
            result = userArray[1][0] + " wins!";
        } else {
            result = null;
        }
    } else if (userArray[0][0] === userArray[1][0] && userArray[1][0] === userArray[2][0]) {
        if (!null) {
            result = userArray[0][0] + " wins!";
        } else {
            result = null;
        }
    } else if (userArray[0][1] === userArray[1][1] && userArray[1][1] === userArray[2][1]) {
         if (!null) {
            result = userArray[0][1] + " wins!";
        } else {
            result = null;
        }
    } else if (userArray[0][2] === userArray[1][2] && userArray[1][2] === userArray[2][2]) {
         if (!null) {
            result = userArray[0][2] + " wins!";
        } else {
            result = null;
        }
    } else if (userArray[0][0] === userArray[1][1] && userArray[1][1] === userArray[2][2]) {
        if (!null) {
            result = userArray[0][2] + " wins!";
        } else {
            result = null;
        }
    } else if (userArray[0][2] === userArray[1][1] && userArray[1][1] === userArray[2][0]) {
        if (!null) {
            result = userArray[0][2] + " wins!";
        } else {
            result = null;
        }
    } else {
        result = null;
    }
    return result;
}