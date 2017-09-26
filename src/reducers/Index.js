/**
 * Created by yanshi0429 on 2017/9/22.
 */
import {combineReducers} from 'redux';
import loginIn from './Login';

const rootReducer = combineReducers({
    loginIn: loginIn
});

export default rootReducer;