import React from 'react';
import { StyleSheet, View, Modal, Text } from 'react-native';
import { CardSection } from './CardSection';
import { Button } from './Button';

const Confirm = ({ children, visible, onAccept, onDecline }) => (
      <Modal
        visible={visible}
        transparent 
        animationType='slide'
        onRequestClose={() => {}}
      >
        <View style={styles.containerStyle}>
          <CardSection style={styles.cardSectionStyle}>
            <Text style={styles.textStyle}>{children}</Text>
          </CardSection>

            <CardSection>
                <Button onPress={onAccept}>Yes</Button>
                <Button onPress={onDecline}>No</Button>
            </CardSection>
          
        </View>
      </Modal>
    );

const styles = StyleSheet.create({
  cardSectionStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 200
  },
  containerStyle: {
    backgroundColor: 'rgba(0,0,0,0.75)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export { Confirm };
