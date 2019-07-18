var LetterCreator = require("./word")
var inquirer = require("inquirer")

var arrOptions = ["Hello","Goodbye"]

//Selects and translates the arr
function selectAndTranslate(arr){
    var arrNum = Math.floor(Math.random() * arr.length)
        //Relate that number with a person inside our array
    var computerSelection = arr[arrNum];
    return computerSelection
}

var selection = selectAndTranslate(arrOptions)
console.log(selection)
