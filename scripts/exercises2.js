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
        console.log("*" + " " * (height - 2) + "*");
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