import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import SignupForm from '../components/SignupForm';
import { Logo } from '../common';

export default class Signup extends Component {
  onButtonPress() {
    Actions.login();
  }
  render() {
    return (
      <ScrollView style={styles.scroll}>
        <Logo />
        <View style={styles.container}>
          <SignupForm />
          <View style={styles.footer}>
            <Text style={styles.textStyle}>Already have an account? </Text>
            <TouchableOpacity onPress={this.onButtonPress.bind(this)}>
                <Text style={styles.textStyle}>Log in</Text>
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
    paddingTop: 5,
  },
  footer: {
    flexDirection: 'row',
    paddingTop: 20
  },
  textStyle: {
    color: '#fff',
    fontSize: 19,
    fontWeight: '400'
  }
});
