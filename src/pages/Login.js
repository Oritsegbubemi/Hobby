import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import LoginForm from '../components/LoginForm';
import { Logo } from '../common';

export default class Login extends Component {
  onButtonPress() {
    Actions.signup();
  }
  render() {
    return (
      <ScrollView style={styles.scroll}>
        <Logo />
        <View style={styles.container}>
          <LoginForm />
          <View style={styles.footer}>
            <Text style={styles.textStyle}>Don't have an account? </Text>
            <TouchableOpacity onPress={this.onButtonPress.bind(this)}>
                <Text style={styles.textStyle}> Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scroll: { 
    flex: 1,
    backgroundColor: '#1a67a2',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
    paddingBottom: 15
  },
  footer: {
    flexDirection: 'row',
    paddingTop: 50
  },
  textStyle: {
    color: '#fff',
    fontSize: 19,
    fontWeight: '400'
  }
});
