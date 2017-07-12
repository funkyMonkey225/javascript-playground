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