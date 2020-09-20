import { CORRECT_GUESS } from '../constants/action-types';

/**
* @function successReducer 
* @param {boolean} state - success as booleon.
* @param {object} action - actions to be reduced.
* @returns {boolean} - new state
*/
export default function(state=false, action) {
    switch(action.type) {
        case CORRECT_GUESS:
            return true;
        default:
            return state
    };
};