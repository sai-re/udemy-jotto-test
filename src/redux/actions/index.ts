import { 
    CORRECT_GUESS, 
    GUESS_WORD, 
    SECRET_WORD, 
    RESET_STATE, 
    GIVE_UP 
} from '../constants/action-types';

import { RootState } from '../configureStore';
import { appActionTypes } from '../../types/actions';
import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';

import { getLetterMatchCount } from '../../helpers/index';
// import axios from 'axios';

/**
* returns redux thunk function that dispatches GUESS_WORD action
* @function guessWord
* @param {string} guessedWord - Guessed word
* @returns {function} - Thunk function
*/
export const guessWord = (guessedWord: string): ThunkAction<void, RootState, null, Action<string>> => (dispatch, getState) => {
    //get secret word from state object
    
    const secretWord = getState().secretWord;

    const letterMatchCount = getLetterMatchCount(guessedWord, secretWord);

    const guessWord: appActionTypes = {
        type: GUESS_WORD,
        payload: { guessedWord, letterMatchCount }
    };

    //dispatch to reducer, which will add guessed word to redux state
    dispatch(guessWord);

    //turn success state to true if guessed word is correct (secretWord[0])
    if (guessedWord === secretWord) {
        const correctGuess: appActionTypes = {
            type: CORRECT_GUESS,
        };

        dispatch(correctGuess);
    };
};

/**
* returns redux thunk function that returns a axios promise that dispatches SECRET_WORD action 
* @function getSecretWord
* @returns {function} - Thunk function
*/
export const getSecretWord = (): ThunkAction<void, RootState, null, Action<string>> => dispatch => {
    // return axios.get("https://random-word-api.herokuapp.com//word?number=1")
    // .then(response => {
    //     dispatch({
    //         type: SECRET_WORD,
    //         payload: response.data
    //     });
    // });

    const getSecretWord: appActionTypes = {
        type: SECRET_WORD,
        payload: "randomGuess" 
    };

    dispatch(getSecretWord);
};

/**
* returns action to reset state
* @function giveUp
* @returns {object} - returns action
*/
export function givenUp(): appActionTypes { 
    return {
        type: GIVE_UP
    };
};

/**
* returns action to reset state
* @function resetState
* @returns {object} - returns action
*/
export function resetState(): appActionTypes { 
    return {
        type: RESET_STATE
    };
};