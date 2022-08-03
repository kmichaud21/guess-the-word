const guessedLetters = document.querySelector(".guessed-letters");
const guess = document.querySelector(".guess");
const letter = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remaining = document.querySelector(".remaining");
const remainingSpan = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const playAgainHide = document.querySelector(".play-again");

const word = "magnolia";

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
    const userInput = letterInput.value;
    console.log(userInput);
    letterInput.value = "";
});
