import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { appActionTypes } from '../types/actions';

export const middlewares = [thunk as ThunkMiddleware<RootState, appActionTypes>];

export default createStore(
    rootReducer,
    applyMiddleware(...middlewares)
);

//constructs type by grabing type of all reducers (type for master state)
export type RootState = ReturnType<typeof rootReducer>;