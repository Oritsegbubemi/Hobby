import { Actions } from 'react-native-router-flux';
import { Alert } from 'react-native';
import { 
    LOGIN_EMAIL_CHANGED, 
    LOGIN_PASSWORD_CHANGED, 
    LOGIN_USER_SUCCESS, 
    LOGIN_USER_FAIL, 
    LOGIN_USER 
} from './types';

const firebase = require('firebase');
global.Symbol = require('core-js/es6/symbol');
global.Symbol = require('core-js/fn/symbol/iterator');

export const emailChanged = (text) => ({
        type: LOGIN_EMAIL_CHANGED,
        payload: text
    });

export const passwordChanged = (text) => ({
        type: LOGIN_PASSWORD_CHANGED,
        payload: text
    });

export const loginUser = ({ email, password }) => (dispatch) => {
        dispatch({ type: LOGIN_USER });
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => loginUserSuccess(dispatch, user))
        .catch(() => loginUserFail(dispatch));
    };

const loginUserSuccess = (dispatch, user) => {
    dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
    if (firebase.auth().currentUser.emailVerified) {
        Actions.hobby();
    } else {
        Alert.alert('Email Verification', 'Verify your Email Address');
    } 
   
};

const loginUserFail = (dispatch) => {
    dispatch({ type: LOGIN_USER_FAIL });
};
