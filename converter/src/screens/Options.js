import React from 'react';
import {SafeAreaView, ScrollView, Linking, Alert} from 'react-native';

import RowItem from '../components/RowItem';
import RowSeparator from '../components/RowSeparator';

const openUrl = url => {
  Linking.openURL(url).catch(() => {
    Alert.alert('Sorry, something went wrong', 'Please, try again later.');
  });
};

export default () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <RowItem
          text="Themes"
          onPress={() =>
            openUrl(
              'httpsxcx://learn.handlebarlabs.com/p/react-native-basics-build-a-currency-converter',
            )
          }
        />
        <RowSeparator />
        <RowItem
          text="React Native Basics"
          onPress={() =>
            openUrl(
              'https://learn.handlebarlabs.com/p/react-native-basics-build-a-currency-converter',
            )
          }
        />
        <RowSeparator />
        <RowItem
          text="React Native by Example"
          onPress={() => openUrl('https://reactnativebyexample.com')}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
