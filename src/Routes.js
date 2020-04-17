import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Reset from './pages/Reset';
import Hobby from './pages/Hobby';

export default class Routes extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Router>
                    <Scene key='real' hideNavBar >
                        <Scene key='login' component={Login} title='Login' initial />
                        <Scene key='signup' component={Signup} title='Signup' />
                        <Scene key='forgot' component={Reset} title='Reset' />
                        <Scene key='hobby' component={Hobby} title='Hobby' />
                    </Scene>
                </Router>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
});

