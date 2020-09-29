import { combineReducers } from 'redux';
import { RESET_STATE } from '../constants/action-types';
import success from './successReducer';
import guessedWords from './guessedWordReducer';
import secretWord from './secretWordReducer';
import giveUp from './giveUpReducer';

//combine all reducers
const appReducer = combineReducers ({
    success,
    guessedWords,
    secretWord,
    giveUp
});

//global reducer for operation relating to whole state
const rootReducer = (state, action) => {
    if (action.type === RESET_STATE) {
        state = undefined;
    };

    return appReducer(state, action);
};

export default rootReducer;