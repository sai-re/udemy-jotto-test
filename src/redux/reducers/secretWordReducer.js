import { SECRET_WORD } from '../constants/action-types';

/**
* @function secretWordReducer
* @param {string} state - state before reducer
* @param {object} action - actions to be reduced.
* @returns {string} - new secret word from payload 
*/
export default function(state=null, action) {
    switch(action.type) {
        case SECRET_WORD:
            return action.payload;
        default:
            return state
    }
}