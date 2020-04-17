import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { emailChanged, passwordChanged, loginUser } from '../actions/LoginAction';
import { Input, Button, Spinner } from '../common';

class LoginForm extends Component {
  onEmailChange(text) {
      this.props.emailChanged(text);
  }
  onPasswordChange(text) {
      this.props.passwordChanged(text);
  }
  onButtonPress() {
      const { email, password } = this.props;
      this.props.loginUser({ email, password });  
  }
  onForgetPass() {
    Actions.forgot();
  }
  renderButton() {
      if (this.props.loading) {
          return <Spinner size="large" />;
      }
      return (
          <Button onPress={this.onButtonPress.bind(this)}>
              Log in
          </Button>
      );
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.main}>

          <View style={styles.entryStyle}>
            <Text style={styles.textStyle}>Email</Text>
            <Input 
              value={this.props.email}
              onChangeText={this.onEmailChange.bind(this)}
              keyboardType='email-address'
              //autoFocus
            />
          </View>

          <View style={styles.entryStyle}>
            <Text style={styles.textStyle}>Password</Text>
            <Input
                value={this.props.password}
                onChangeText={this.onPasswordChange.bind(this)}
                secureTextEntry
            />
          </View>

        </View>
      
        <View style={styles.forgotStyle}>
            <TouchableOpacity onPress={this.onForgetPass.bind(this)}>
              <Text style={styles.forgotTextStyle}>Forgot Password?</Text>
            </TouchableOpacity>
        </View>
        <Text style={styles.errorStyle}>{this.props.error}</Text>
        <View>
          {this.renderButton()}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 17,
    paddingTop: 20,
    paddingBottom: 20,
  },
  main: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  entryStyle: {
    padding: 8
  },
  textStyle: {
    fontSize: 21,
    color: '#000',
  },
  forgotStyle: {
    alignItems: 'flex-end',
    paddingRight: 8
  },
  forgotTextStyle: {
    color: '#1a67a2',
    fontSize: 17
  },
  errorStyle: {
    color: 'red',
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'center'
},
inputStyle: {
  width: 300,
  paddingTop: 5,
  paddingBottom: 20,
  fontSize: 21,
  fontWeight: 'bold',
  color: 'rgba(0,0,0,1)',
  alignItems: 'center',  
},
});

const mapStateToProps = state => ({
      email: state.auth.email,
      password: state.auth.password,
      error: state.auth.error,
      loading: state.auth.loading
  });

export default connect(mapStateToProps, { 
  emailChanged, 
  passwordChanged,
  loginUser,
  })(LoginForm);
