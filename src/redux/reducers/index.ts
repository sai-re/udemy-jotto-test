import { combineReducers } from 'redux';
import { RESET_STATE } from '../constants/action-types';
import success from './successReducer';
import guessedWords from './guessedWordReducer';
import secretWord from './secretWordReducer';
import giveUp from './giveUpReducer';

import { appActionTypes } from '../../types/actions';
import { AppState } from '../../types/state';

//combine all reducers
const appReducer = combineReducers ({
    success,
    guessedWords,
    secretWord,
    giveUp
});

//global reducer for operation relating to whole state
const rootReducer = (state: AppState | undefined, action: appActionTypes) => {
    if (action.type === RESET_STATE) {
        state = undefined;
    };

    return appReducer(state, action);
};

export default rootReducer;