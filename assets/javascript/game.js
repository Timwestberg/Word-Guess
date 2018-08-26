







//  FOR HOLDING DATA!!!
// ===========================================================================================================
var phrase = ["Jack sparrow carried 1 ______, which he saved for Captain Barbosa.", 
"Jack sparrow carries around a _______ that guides him to his most inner desires",
"Disney's new anticipated game _______ hearts comes our January 2019.",
"Peter pan is from _____ land",
"Disneyland has incorporated a new resturante that directly reference a famous pizza parlor in toy story, the name of the parlor is Pizza ______",
"In the Lion King two, Scar's spawn was shamefully ostracized in the movie by the plains as they sang 'you are not ___ of us' "
] 

var wordBank = ["bullet", "compass", "kingdom", "never", "planet", "one"];

var hint = "";

var selectedWord = "";

var lettersInWord = [];

var numBlanks = 0;

var blanksAndSuccess = [];

var wrongLetters = [];

// GAME COUNTER!!!
// =================================================================
var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;

// FUNCITONS!!!
// ===========================================================================================================



function game() {
    selectedWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    lettersInWord = selectedWord.split("");
    numBlanks = lettersInWord.length;
    phrase = phrase[Math.floor(Math.random() * wordBank.length)];
    hint = phrase;
        
    
    
       

   

    // RESET!!!
    // =================================================================
    guessesLeft = 9;
    wrongLetters = [];
    blanksAndSuccess = [];


    // FOR LOOP FOR PUSHING THE AMOUNT OF BLANKS IN WORD TO THE SCREEN --- SOME REASON WHEN RAN IT ADDS EXTRA BLANKS?????
    // =========================================================================QUESTION ON BELOW CODE ^^^^^^^^^=========

  

    for (var i = 0; i < numBlanks; i++) {
        blanksAndSuccess.push("_");
    }

    document.getElementById("phrase-opt").innerText = hint;
    document.getElementById("word-guess").innerText = blanksAndSuccess.join("_");
    document.getElementById("guess-left").innerText = guessesLeft;
    document.getElementById("win-s").innerText = winCount;
    document.getElementById("loss-s").innerText = lossCount;
    

    console.log(selectedWord);
    console.log(lettersInWord);
    console.log(numBlanks);
    console.log(blanksAndSuccess);
    
}

// CANT GET THE CODE BELOW TO RUN PROPERLY HINT DOES NOT DISPLAY CONSOLE.LOG EITHER
// function hint() {
//     var phrase = ["Jack sparrow carried 1 ______, which he saved for Captain Barbosa.", 
//     "Jack sparrow carries around a _______ that guides him to his most inner desires",
//     "Disney's new anticipated game _______ hearts comes our January 2019.",
//     "Peter pan is from _____ land",
//     "Disneyland has incorporated a new resturante that directly reference a famous pizza parlor in toy story, the name of the parlor is Pizza ______",
//     "In the Lion King two, Scar's spawn was shamefully ostracized in the movie by the plains as they sang 'you are not ___ of us' "
//     ] 

//     phrase = phrase[Math.floor(Math.random() * wordBank)];
    
//     document.getElementById("phrase-opt").innerText = phrase

//     console.log(phrase)
// }


function checkLetter(letter) {
    var letterCorrect = false;

    for (i = 0; i < numBlanks; i++) {
        if (selectedWord[i] == letter) {
            letterCorrect = true;
        }
    }

    if (letterCorrect) {
        for (i = 0; i < numBlanks; i++) {
            if (selectedWord[i] == letter) {
                blanksAndSuccess[i] = letter;
            }
        }
    }

    else {
        wrongLetters.push(letter);
        guessesLeft--
    }

}

function roundComplete() {

    document.getElementById("guess-left").innerHTML = guessesLeft;

    document.getElementById("word-guess").innerHTML = blanksAndSuccess.join(" ")

    document.getElementById("letters-sofar").innerHTML = wrongLetters.join(" ")

    // IF YOU WIN!!!
    if (lettersInWord.toString() == blanksAndSuccess.toString()) {
        winCount++
        alert("You Win!");

        document.getElementById("win-s").innerText = winCount;

        game();
    }
    //  IF YOU LOSE!!!
    else if(guessesLeft == 0) {
        lossCount++
        alert("You Lost");

        document.getElementById("loss-s").innerText = lossCount;

        game();
    }
}
// MAIN PROCESS!!!!
// ===========================================================================================================


document.onkeyup = function(event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();

    console.log(letterGuessed);
    checkLetter(letterGuessed);
    roundComplete();
};

document.getElementById("start").addEventListener("click", game, hint);