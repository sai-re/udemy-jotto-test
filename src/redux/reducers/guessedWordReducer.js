import { GUESS_WORD } from '../constants/action-types';

/**
* @function guessedWordsReducer
* @param {array} state - array of guessed words.
* @param {object} action - actions to be reduced.
* @returns {array} - new guessedWords state
*/
export default function(state=[], action) {
    switch(action.type) {
        case GUESS_WORD:
            return [...state, action.payload];
        default:
            return state
    }
}