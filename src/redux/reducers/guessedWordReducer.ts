import { GUESS_WORD } from '../constants/action-types';
import { appActionTypes } from '../../types/actions';

/**
* @function guessedWordsReducer
* @param {array} state - array of guessed words.
* @param {object} action - actions to be reduced.
* @returns {array} - new guessedWords state
*/

const initialState: any[] = [];

export default function(state=initialState, action: appActionTypes): any[] {
    switch(action.type) {
        case GUESS_WORD:
            return [...state, action.payload];
        default:
            return state;
    };
};