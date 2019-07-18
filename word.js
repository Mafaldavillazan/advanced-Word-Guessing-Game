//Require the constructor
var LetterChecker = require ("./letter")

//Constructor the contains word
function WordCreator(userInput){
    this.arrLetters = []

    //Take the user input and adds it to letter array

    for (var i = 0; i< userInput.length; i++){
        //call the letter checker array
        var letterAdd = new LetterChecker(userInput[i])
        this.arrLetters.push(letterAdd)
    }
}