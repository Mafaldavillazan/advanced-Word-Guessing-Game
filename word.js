//Require the constructor
var LetterChecker = require("./letter")

//Constructor the contains word
function WordCreator(array, userInput) {
    this.newArr = [],
        //Take the user input and adds it to letter array
        function checkerLetter(array, userInput) {
            for (var i = 0; i < array.length; i++) {
                //Change the later status from false to true if it doesnt work
                var letterUpdate = new LetterChecker(array[i], userInput)
                this.newArr.push(letterUpdate)
            }
        }
}

module.exports = WordCreator;