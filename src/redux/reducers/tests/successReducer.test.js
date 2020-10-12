import { CORRECT_GUESS } from '../../constants/action-types';
import successReducer from '../successReducer';

it('returns false when no action is passed', () => {
    const newState = successReducer(undefined, {});
    expect(newState).toBe(false);
});

it('returns true when action of type CORRECT_GUESS is passed', () => {
    const newState = successReducer(undefined, { type: CORRECT_GUESS });
    expect(newState).toBe(true);
});