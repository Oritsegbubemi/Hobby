import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'; 

const Button2 = ({ onPress, children }) => (
    <View style={styles.container}>
        <TouchableOpacity onPress={onPress} style={styles.buttonStyle}>
            <Text style={styles.textStyle}>{children}</Text>
        </TouchableOpacity>
        </View>
    );

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: '#0b6fa8',
    borderWidth: 1,
    borderColor: '#fff',
    alignItems: 'flex-end',
    paddingHorizontal: 25,
    paddingVertical: 4,
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
  },
  textStyle: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 10,
    paddingBottom: 5,
    color: '#fff',
  },
  container: {
      paddingTop: 5,
  }
});

export { Button2 };
