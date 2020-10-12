import { CORRECT_GUESS } from '../constants/action-types';
import { appActionTypes } from '../../types/actions';

/**
* @function successReducer 
* @param {boolean} state - success as booleon.
* @param {object} action - actions to be reduced.
* @returns {boolean} - new state
*/

const initialState: boolean = false;

export default function(state=initialState, action: appActionTypes): boolean {
    switch(action.type) {
        case CORRECT_GUESS:
            return true;
        default:
            return state;
    };
};