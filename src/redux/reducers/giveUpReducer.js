import { GIVE_UP } from '../constants/action-types';

/**
* @function giveUpReducer 
* @param {boolean} state - success as booleon.
* @param {object} action - actions to be reduced.
* @returns {boolean} - new state
*/
export default function(state=false, action) {
    switch(action.type) {
        case GIVE_UP:
            return true;
        default:
            return state;
    };
};