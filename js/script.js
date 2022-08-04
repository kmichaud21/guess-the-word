const guessedLetters = document.querySelector(".guessed-letters");
const guess = document.querySelector(".guess");
const letter = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remaining = document.querySelector(".remaining");
const remainingSpan = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const playAgainHide = document.querySelector(".play-again");

const word = "magnolia";
const guessedLetters = [];

const updateParagraph = function (word) {
    const updatParagraphLetters = [];
    for (const letter of word) {
        console.log(letter);
        updatParagraphLetters.push("●");
    }
    wordInProgress.innerText = updatParagraphLetters.join("");
};

updateParagraph(word);

guess.addEventListener("click", function(e) {
    e.preventDefault();
    message.innnerText = "";
    const userInput = letterInput.value;
    const goodGuess = inputValidator(guess);
    if (goodGuess) {
        makeGuess(guess);
    }
    letterInput.value = "";
});

const inputValidator = function (letterInput.value()) {
    const acceptedLetters = [a-zA-Z]/;
    if (letterInput.length === 0) {
        // Is the input empty?
        message.innerText = "Please enter a letter.";
    }
    else if (letterInput.length > 1) {
        //Did you type more than one word?
    }
    else if (!letterInput.match(acceptedLetters) {
        
    }
    else {
             //We finally got a single letter, omg yay
             return input;
  }
 };
             
  const makeGuess = function (guess) {
        guess = guess.toUpperCase();
        if (guessedLetters.includes(guess)) {
            message.innerText = "You already guessed that letter, silly. Try again.";
        } else {
            guessedLetters.push(guess);
            console.log(guessedLetters);
        }
        
    };
             
             