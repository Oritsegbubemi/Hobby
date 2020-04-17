import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, signupUser } from '../actions/SignupAction';
import { Input, Button, Spinner } from '../common';

class SignupForm extends Component {
  onEmailChange(text) {
      this.props.emailChanged(text);
  }
  onPasswordChange(text) {
      this.props.passwordChanged(text);
  }
  onButtonPress() {
      const { email, password } = this.props;
      this.props.signupUser({ email, password });   
  }
  renderButton() {
      if (this.props.loading) {
          return <Spinner size="large" />;
      }
      return (
          <Button onPress={this.onButtonPress.bind(this)}>
              Sign up
          </Button>
      );
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.main}>

         <View style={styles.entryStyle}>
            <Text style={styles.textStyle}>Username</Text>
            <Input 
              autoFocus
            />
          </View>

          <View style={styles.entryStyle}>
            <Text style={styles.textStyle}>Email</Text>
            <Input 
              keyboardType='email-address'
              value={this.props.email}
              onChangeText={this.onEmailChange.bind(this)}
            />
          </View>

          <View style={styles.entryStyle}>
            <Text style={styles.textStyle}>Phone Number</Text>
              <Input
                keyboardType='phone-pad'
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
    padding: 13,
    paddingLeft: 18,
    paddingRight: 18,
  },
  main: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  entryStyle: {
    padding: 5
  },
  textStyle: {
    fontSize: 21,
    color: '#000',
  },
  errorStyle: {
        color: 'red',
        fontSize: 15,
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
      email: state.sign.email,
      password: state.sign.password,
      error: state.sign.error,
      loading: state.sign.loading
  });

export default connect(mapStateToProps, { 
  emailChanged, 
  passwordChanged,
  signupUser,
  })(SignupForm);
