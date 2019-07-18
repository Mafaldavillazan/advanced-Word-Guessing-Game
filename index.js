var LetterCreator = require("./word")
var inquirer = require("inquirer")

var arrOptions = ["Hello", "Goodbye"]
//Prompt the user
promptUser()

//Selects and translates the arr
function selectAndTranslate(arr, userInput) {
    //Selectes a random index from the array
    var arrNum = Math.floor(Math.random() * arr.length)
    //It transletes the word into lines or words
    var computerSelection = new LetterCreator(arr[arrNum], userInput);
    return computerSelection
}

function promptUser() {
    console.log("\n--------\n Guess the word \n--------\n")
    inquirer
        .prompt([
            {
                name: "name",
                message: "Select a letter"
            }
        ])
        .then(function (answers) {
            selectAndTranslate(arrOptions, answers.name)
        })
}


