import React from 'react';
import {View, StyleSheet} from 'react-native';

import colors from '../constants/colors';

const RowSeparator = () => <View style={styles.separator} />;

const styles = StyleSheet.create({
  separator: {
    marginHorizontal: 20,
    height: StyleSheet.hairlineWidth,
    backgroundColor: colors.border,
  },
});

export default RowSeparator;
