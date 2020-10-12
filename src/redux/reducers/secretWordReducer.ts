import { SECRET_WORD } from '../constants/action-types';
import { appActionTypes } from '../../types/actions';

/**
* @function secretWordReducer
* @param {string} state - state before reducer
* @param {object} action - actions to be reduced.
* @returns {string} - new secret word from payload 
*/

const initialState: string = "";

export default function(state=initialState, action: appActionTypes): string {
    switch(action.type) {
        case SECRET_WORD:
            return action.payload;
        default:
            return state;
    };
};