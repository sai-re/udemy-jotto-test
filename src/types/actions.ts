import {
    CORRECT_GUESS,
    GUESS_WORD,
    SECRET_WORD,
    RESET_STATE,
    GIVE_UP
} from '../redux/constants/action-types';

interface guessWord {
    type: typeof GUESS_WORD,
    payload: object
};

interface correctGuess {
    type: typeof CORRECT_GUESS
};

interface getSecretWord {
    type: typeof SECRET_WORD,
    payload: any
};

interface givenUp {
    type: typeof GIVE_UP
};

interface resetState {
    type: typeof RESET_STATE
};

export type appActionTypes = guessWord | correctGuess | getSecretWord | givenUp | resetState;