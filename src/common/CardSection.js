import React from 'react';
import { StyleSheet, View } from 'react-native'; 

const CardSection = (props) => (
     <View style={styles.containerStyle}>
        {props.children}
    </View>
    );

const styles = StyleSheet.create({
  containerStyle: {
    borderBottomWidth: 5,
    borderColor: '#0b6fa8',
    borderRadius: 10,
    padding: 3,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative'
  },
});

export { CardSection };
