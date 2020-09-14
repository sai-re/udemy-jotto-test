import { CORRECT_GUESS } from '../constants/action-types';

export function correctGuess() { 
    return {
        type: CORRECT_GUESS,
    };
}
