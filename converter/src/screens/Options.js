import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
} from 'react-native';

import colors from '../constants/colors';

export default () => {
  return (
    <SafeAreaView>
      <TouchableOpacity style={styles.row}>
        <Text style={styles.text}>Themes</Text>
        <Text style={styles.arrow}>&gt;</Text>
      </TouchableOpacity>

      <View style={styles.separator} />

      <TouchableOpacity style={styles.row}>
        <Text style={styles.text}>React Native Basics</Text>
      </TouchableOpacity>

      <View style={styles.separator} />

      <TouchableOpacity style={styles.row}>
        <Text style={styles.text}>React Native by Example</Text>
      </TouchableOpacity>
    </SafeAreaView>
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
  separator: {
    marginHorizontal: 20,
    height: StyleSheet.hairlineWidth,
    backgroundColor: colors.border,
  },
  arrow: {
    color: colors.blue,
  },
});
