'use strict';
import * as types from '../constants/ActionTypes';

// 模拟服务器返回的用户信息
let user = {
    'name': 'admin',
    'age': '24'
}

export function doLogin() {
    return dispatch => {
        dispatch(isLogining());
        // 模拟用户登录
        let result = fetch('https://facebook.github.io/react-native/movies.json', {
            method: 'GET'
        })
            .then((response) => response.json())
            .then((res) => {
                dispatch(loginSuccess(true, user));
            }).catch((e) => {
                dispatch(loginSuccess(false, null));
            });
    }
}

function isLogining() {
    return {
        type: types.LOGIN_IN_DOING
    }
}

function loginSuccess(isSuccess, user) {
    return {
        type: types.LOGIN_IN_DONE,
        isSuccess: isSuccess,
        user: user
    }
}
