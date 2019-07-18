//Creates constructor
function LetterChecker(letter,userInput){
    this.letter = letter,
    this.guessed = false,
    
    //Updates de value if the userInput is correct
    function update(){
        if(this.letter === userInput){
            this.guessed = true
        }
    },
    
    //It will reveal the letter if the user has a right letter
    function guessed(){
        if(this.guessed){
            return this.letter
        }
        else{
            return "-"
        }
    }
}

//Export the constructor
module.exports = LetterChecker;