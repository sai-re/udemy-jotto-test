/**
 * returns redux thunk function that dispatches GUESS_WORD action
* @function getLetterMatchCount
* @param {string} guessedWord - Guessed word
* @param {string} secretWord - Secret word
* @returns {number} - number of letters matched
*/
export function getLetterMatchCount(guessedWord, secretWord) {
    //split both words into Sets to remove duplicate characters
    const secretLetterSet = new Set(secretWord.split(""));
    const guessedLetterSet = new Set(guessedWord.split(""));
    //create array from set, check if guessed letter has letters of secret word, return length
    return [...secretLetterSet].filter(letter => guessedLetterSet.has(letter)).length
}