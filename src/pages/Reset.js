import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Header, Icon, Title, Button, Left, Body } from 'native-base';
import { emailChanged } from '../actions/LoginAction';
import { Input, Spinner, Button2 } from '../common';

class Reset extends Component {
  onEmailChange(text) {
      this.props.emailChanged(text);
  }

  onBackButtonPress() {
    Actions.login();
  }

  onButtonPress() {
    const firebase = require('firebase');
    global.Symbol = require('core-js/es6/symbol');
    global.Symbol = require('core-js/fn/symbol/iterator');

    const auth = firebase.auth();
    const emailAddress = this.props.email;
    
    auth.sendPasswordResetEmail(emailAddress)
    .then(() => Actions.login())
    .catch(() => Actions.login());
  }
  renderButton() {
      if (this.props.loading) {
          return <Spinner size="large" />;
      }
      return (
       <Button2 onPress={this.onButtonPress.bind(this)}>
         Enter
       </Button2>
      );
  }
  render() {
    return (
      <View style={styles.container}>
       <Header 
       style={{ backgroundColor: '#0b6fa8' }} 
       androidStatusBarColor='#192f3f'
       > 
           <Left>
              <Button transparent onPress={this.onBackButtonPress.bind(this)}>
                <Icon name='arrow-back' />
              </Button>
           </Left>
           <Body style={styles.bodyStyle}>
           <Title style={styles.headerStyle}>Reset Password</Title>
         </Body>
         </Header>
        <View style={styles.main}>
          <View style={styles.entryStyle}>
            <Text style={styles.textStyle}>Email</Text>
            <Input 
              value={this.props.email}
              onChangeText={this.onEmailChange.bind(this)}
              keyboardType='email-address'
              autoFocus
            />
          </View>
        </View>
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
    flex: 1
  },
  main: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  entryStyle: {
    marginTop: 20
  },
  textStyle: {
    fontSize: 21,
    color: '#000',
  },
  headerStyle: {
    fontSize: 28,
    alignSelf: 'center',
    fontWeight: 'bold'
  },
  bodyStyle: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

const mapStateToProps = state => ({
      email: state.auth.email,
      loading: state.auth.loading
  });

export default connect(mapStateToProps, { 
  emailChanged, 
  })(Reset);

