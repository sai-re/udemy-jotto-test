import { CORRECT_GUESS } from '../constants/action-types';

export default function(state=false, action) {
    switch(action.type) {
        case CORRECT_GUESS:
            return true;
        default:
            return state
    }
}