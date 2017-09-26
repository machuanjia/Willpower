/**
 * Created by yanshi0429 on 2017/9/22.
 */
import {createStore,applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers/Index';

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

export default function  configureStore(initialState) {
    const store = createStoreWithMiddleware(rootReducer,initialState);
    return store;
}

