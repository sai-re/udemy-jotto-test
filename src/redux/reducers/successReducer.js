import { CORRECT_GUESS } from '../constants/action-types';

/**
* @function Country 
* @param {array} state - array of guessed words.
* @param {object} action - actions to be reduced.
* @returns {array} - new guessedWords state
*/
export default function(state=false, action) {
    switch(action.type) {
        case CORRECT_GUESS:
            return true;
        default:
            return state
    };
};