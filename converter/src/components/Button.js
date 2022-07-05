import React from 'react';
import {TouchableOpacity, Text, StyleSheet, Image} from 'react-native';

import colors from '../constants/colors';

const Button = ({text, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Image
        source={require('../assets/images/reverse.png')}
        style={styles.buttonIcon}
        resizeMode="contain"
      />
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
  },
});

export default Button;
