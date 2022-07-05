import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

import colors from '../constants/colors';

const RowItem = ({text, onPress}) => {
  return (
    <TouchableOpacity style={styles.row} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
      <Text style={styles.arrow}>&gt;</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  text: {
    fontSize: 16,
    color: colors.text,
  },
  arrow: {
    color: colors.blue,
  },
});

export default RowItem;
