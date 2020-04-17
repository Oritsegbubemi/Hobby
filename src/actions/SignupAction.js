import { Actions } from 'react-native-router-flux';
import { Alert } from 'react-native';
import { SIGNUP_EMAIL_CHANGED, 
    SIGNUP_PASSWORD_CHANGED, 
    SIGNUP_USER_SUCCESS, 
    SIGNUP_USER_FAIL, 
    SIGNUP_USER 
} from './types';

const firebase = require('firebase');
global.Symbol = require('core-js/es6/symbol');
global.Symbol = require('core-js/fn/symbol/iterator');

export const emailChanged = (text) => ({
        type: SIGNUP_EMAIL_CHANGED,
        payload: text
    });

export const passwordChanged = (text) => ({
        type: SIGNUP_PASSWORD_CHANGED,
        payload: text
    });

export const signupUser = ({ email, password }) => (dispatch) => {
        dispatch({ type: SIGNUP_USER });
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(user => signupUserSuccess(dispatch, user))
        .catch(() => signupUserFail(dispatch));
        };

const signupUserSuccess = (dispatch, user) => {
    dispatch({ type: SIGNUP_USER_SUCCESS, payload: user });
    firebase.auth().currentUser.sendEmailVerification()
    .then(
        Alert.alert('Email Verification', 'Verify your Email Address'),
        Actions.login()
        )
    .catch(() => signupUserFail(dispatch));
};

const signupUserFail = (dispatch) => {
    dispatch({ type: SIGNUP_USER_FAIL });
};
