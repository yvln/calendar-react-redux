import { combineReducers } from 'redux';
import displaymonth from './displaymonth';
import memos from './memos';

const rootReducer = combineReducers({
    displaymonth,
    memos
});

export default rootReducer;
