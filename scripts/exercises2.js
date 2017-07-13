// prints numbers in any range to console
function printNumbers(start, end) {
    while(start <= end) {
        console.log(start);
        start += 1;
    }
}

// prints a square composed of asterisks
function printSquare(size) {
    var i = 1;
    while (i <= size) {
        console.log("*".repeat(size));
        i += 1;
    }
}

// prints a hollow box composed of asterisks
function printBox(width, height) {
    console.log("*".repeat(width));
    var i = 1;
    while (i <= (height - 2)) {
        console.log("*" + (" ".repeat(height - 2)) + "*");
        i += 1;
    }
    console.log("*".repeat(width));
}

// prints user-inputted text surrounded by a banner
function printBanner(text) {
    var width = text.length;
    console.log("*".repeat(width + 4));
    console.log("*" + " " + text + " " + "*");
    console.log("*".repeat(width + 4));
}

// prints factors of any number
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

// uses Ceasar's Cipher to cipher any text with a given offset
function cipher(text, offset) {
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
                if ((j + offset) <= (25)) {
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

// uses Ceasar's Cipher to decipher any text with a given offset
function decipher(text, offset) {
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
                if ((j - offset) >= (0)) {
                    y = alpha[j - offset];
                    cipherText = cipherText + y;
                    break;   
                } else {
                    y = alpha[j + 26 - offset];
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


// Converts any text to l337Speak
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

// Extends long vowels in any text
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

// Another method of exending long vowels in any text
function longLongVowels2(text) {
    var longVow = text.toUpperCase();
    var savedvowel = "";
    var s = "";
    var i = 0;
    while (i < longVow.length) { 
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

// Adds up number in any array
function sumNumbers(numbers) {
    var i = 0;
    var total = 0;
    while (i < numbers.length) {
        total += numbers[i];
        i++;
    }
    return total;
}

// Makes new array with only positive numbers from a given array
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

// Adds any 2 matrices
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

// Multiplies 2 2x2 matrices via traditiona matrix multiplication rules
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

// Gives option to play rockPaperScissors2() again
function playAgain(input) {
    input = prompt("Would you like to play again? ('yes' or 'no')");
    input = input.toLowerCase();
    if (input === "yes") {
        rockPaperScissors2();
    } else if (input === "no") {
        return console.log("Goodbye!");
    } else {
        console.log("Invalid input.");
        playAgain();
    }
}

// Rock, paper, scissors game
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

// Another method of rockPaperScissors game
function rockPaperScissors2() {
    var rules = {
        scissors: {
            rock: "Player 2 wins!",
            paper: "Player 1 wins!",
            scissors: "Draw."},       
        paper: {
            rock: "Player 1 wins!",
            paper: "Player 2 wins!",
            scissors: "Draw."},
        rock: {
            rock: "Draw.",
            paper: "Player 2 wins!",
            scissors: "Player 1 wins!"}
        }
    var move1 = prompt("Player 1's move: ");
    var move2 = prompt("Player 2's move: ");    
    var result = "";
    move1 = move1.toLowerCase();
    move2 = move2.toLowerCase();

    if (move1 in rules) {
        result = rules[move1][move2];
    } else {
        console.log("Invalid input. Please choose one: 'rock', 'paper', or 'scissors'");
        rockPaperScissors2();
    }
    console.log(result);
    playAgain();
}

// Detects if someone has won Tic Tac Toe based on given array
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