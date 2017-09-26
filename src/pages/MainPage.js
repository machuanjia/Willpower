/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

export default class MainPage extends Component {
    render() {
        let user = this.props.navigation.state.params.user;
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
                {/*<Text>{this.props.user}</Text>*/}
                <Text>{'姓名:' + user.name + '\n年龄:' + user.age}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
