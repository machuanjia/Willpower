/**
 * Created by yanshi0429 on 2017/9/22.
 */
import React, {Component} from 'react';
import {Provider} from 'react-redux';
import configureStore from './store/ConfigureStore';
import App from './containers/App';

const store = configureStore();
export default class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <App/>
            </Provider>
        );

    }
}