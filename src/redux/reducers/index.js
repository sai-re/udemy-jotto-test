import { combineReducers } from 'redux';
import success from './successReducer';
import guessedWords from './guessedWordReducer';
import secretWord from './secretWordReducer';

const appReducer = combineReducers ({
    success,
    guessedWords,
    secretWord
});

const rootReducer = (state, action) => {
    if (action.type === 'RESET_STATE') {
        state = undefined;
    };

    return appReducer(state, action);
};

export default rootReducer