import { GIVE_UP } from '../constants/action-types';
import { appActionTypes } from '../../types/actions';

/**
* @function giveUpReducer 
* @param {boolean} state - success as booleon.
* @param {object} action - actions to be reduced.
* @returns {boolean} - new state
*/

const initialState: boolean = false;

export default function(state=initialState, action: appActionTypes): boolean {
    switch(action.type) {
        case GIVE_UP:
            return true;
        default:
            return state;
    };
};