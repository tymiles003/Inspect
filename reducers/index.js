import { combineReducers } from 'redux';
import NavReducer from './NavReducer';

export default combineReducers({
    testReducer: (state = {test: 'sdlksdkf'}, action) => state,
    NavReducer
});