// const { func } = require("prop-types");

//function to return letters matched from guessed words
export function getLetterMatchCount(guessedWord, secretWord) {
    //split both words into Sets to remove duplicate characters
    const secretLetterSet = new Set(secretWord.split(""));
    const guessedLetterSet = new Set(guessedWord.split(""));
    //create array from set, check if guessed letter has letters of secret word, return length
    return [...secretLetterSet].filter(letter => guessedLetterSet.has(letter)).length
}