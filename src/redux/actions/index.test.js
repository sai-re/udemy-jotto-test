import { correctGuess, CORRECT_GUESS } from './index';

describe('correct guess', () => {
    it('returns acction with correct action type', () => {
        const action = correctGuess();
        expect(action).toEqual({type: CORRECT_GUESS});
    });
});