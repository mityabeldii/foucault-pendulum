import { combineReducers } from 'redux';
import main from './MainReducer'

export const reducer = combineReducers({
    main: main,
});