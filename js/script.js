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
    
    const guessesUpdate = function () {
        guessedLetters.innerHTML = "";
        for (const letter of guessedLetters) {
            const li =document.createElement("li");
            li.innerText = letter;
            guessedLetters.append(li);
        }
    };
    
    const updateWordInProgress = function (guessedLetters) {
        const wordUpper = word.toUpperCase();
        const wordArray = wordUpper.split("");
        const revealWord = [];
        for (const letter of wordArray) {
            revealWord.push(letter.toupperCase());
        } else {
            revealWord.push("●");
        }
    }
      // console.log(revealWord);
    wordInProgress.innerText = revealWord.join("");
    checkIfWin();
};

const checkIfWin = function () {
    if (word.toUpperCase() === wordInProgress.innerText) {
        message.classList.add("win");
        message.innerHtml =`<p class="highlight"> You guessed the correct word! Congrats!</p>`;
    }
};
             