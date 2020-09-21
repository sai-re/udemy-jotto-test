import { CORRECT_GUESS, GUESS_WORD, SECRET_WORD } from '../constants/action-types';
import { getLetterMatchCount } from '../../helpers/index';
import axios from 'axios';

/**
* returns redux thunk function that dispatches GUESS_WORD action
* @function guessWord
* @param {string} guessedWord - Guessed word
* @returns {function} - Thunk function
*/
export function guessWord(guessedWord) { 
    return (dispatch, getState) => {
        //get secret word from state object
        const secretWord = getState().secretWord;
        const letterMatchCount = getLetterMatchCount(guessedWord, secretWord);

        //dispatch to reducer, which will add guessed word to redux state
        dispatch({
            type: GUESS_WORD,
            payload: { guessedWord, letterMatchCount }
        });

        //turn success state to true if guessed word is correct
        if (guessedWord === secretWord) {
            dispatch({
                type: CORRECT_GUESS
            });
        };
    };
};

/**
* returns redux thunk function that returns a axios promise that dispatches SECRET_WORD action 
* @function getSecretWord
* @returns {function} - Thunk function
*/
export function getSecretWord() { 
    return (dispatch) => {
        return axios.get("https://random-word-api.herokuapp.com//word?number=1")
        .then(response => {
            dispatch({
                type: SECRET_WORD,
                payload: response.data
            });
        });
    };
};