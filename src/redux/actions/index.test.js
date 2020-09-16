import { correctGuess } from './index';
import { CORRECT_GUESS } from '../constants/action-types';

describe('correct guess', () => {
    it('returns acction with correct action type', () => {
        const action = correctGuess();
        expect(action).toEqual({type: CORRECT_GUESS});
    });
});