import React, { Component } from 'react';
import { StyleSheet, View, TextInput, ToastAndroid } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Communications from 'react-native-communications';
import { Header, Title, Button, Right, Body } from 'native-base';
import { Button2 } from '../common';

export default class Hobby extends Component {
  state={text: ''}

  onBackButtonPress() {
      Actions.login();
  }

  onAddHobbyPress() {
      if(this.state.text == ' ') {
        ToastAndroid.show(`Add a Valid Hobby`, ToastAndroid.SHORT)
      }  else {
            ToastAndroid.show(`You added ${this.state.text} to your hobby`, ToastAndroid.LONG);
      }
      Communications.text('08104738987', `You just added ${this.state.text} hobby`);
      Communications.email(
        'gbubemimakpokpomi@gmail.com',
        'cc', 
        'bcc', 
        'Newly Added Hobby',
        `You just added ${this.state.text} hobby` )
  }

  render() {
    return (
        <View style={styles.container}>
            <Header 
                style={{ backgroundColor: '#0b6fa8' }} 
                androidStatusBarColor='#192f3f'
            > 
                <Body style={styles.bodyStyle}>
                    <Title style={styles.headerStyle}>Hobby</Title>
                </Body>
                <Right>
                    <Button transparent onPress={this.onBackButtonPress.bind(this)}>
                       <Title style={styles.outStyle}>LOGOUT</Title>
                    </Button>
                </Right>
            </Header>
            <View style={styles.main}>
                <TextInput 
                    value={this.state.text}
                    onChangeText={text => this.setState({ text })}
                    style={styles.inputStyle}
                    underlineColorAndroid='transparent'
                    placeholder='Add Hobby'
                />
                <Button2 onPress={this.onAddHobbyPress.bind(this)}>
                    Add
                </Button2>
            </View>
          
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //paddingBottom: 20
  },
  headerStyle: {
    fontSize: 28,
    alignSelf: 'center',
    fontWeight: 'bold'
  },
  bodyStyle: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  main: {
    marginTop: 80, 
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputStyle: {
    width: 380,
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 30,
    fontSize: 21,
    fontWeight: 'bold',
    color: 'rgba(0,0,0,1)',
    alignItems: 'center',  
},
   outStyle: {
    fontSize: 14,
    
    }
});
