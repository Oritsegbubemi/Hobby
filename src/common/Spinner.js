import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native'; 

const Spinner = ({ size }) => (
     <View style={styles.spinnerStyle}>
       <ActivityIndicator size={size || 'large'} />
    </View>
    );
const styles = StyleSheet.create({
  spinnerStyle: {
    backgroundColor: '#0b6fa8',
    borderWidth: 1,
    borderColor: '#fff',
    alignItems: 'center',
    paddingHorizontal: 25,
    paddingVertical: 4,
    marginTop: 6,
    marginLeft: 5,
    marginRight: 5,
  },
});

export { Spinner };
