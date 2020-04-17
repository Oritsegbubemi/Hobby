import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native'; 

const Input = ({ onChangeText, value, secureTextEntry, autoCorrect, keyboardType, autoFocus }) => (
        <View style={styles.container}>
            <View style={styles.sectionStyle}>
                <TextInput 
                    secureTextEntry={secureTextEntry}
                    autoFocus={autoFocus}
                    autoCorrect={autoCorrect}
                    value={value}
                    onChangeText={onChangeText}
                    style={styles.inputStyle}
                    underlineColorAndroid='#1a67a2'
                    keyboardType={keyboardType}
                />
            </View>
        </View>
    );

const styles = StyleSheet.create({
  container: {
      justifyContent: 'center',  
  },
  sectionStyle: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
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

export { Input };
