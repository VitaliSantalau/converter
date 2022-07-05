import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  StatusBar,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import RowItem from '../components/RowItem';
import RowSeparator from '../components/RowSeparator';

import colors from '../constants/colors';
import currencies from '../data/currencies.json';

const CurrencyList = ({navigation}) => {
  const insets = useSafeAreaInsets();
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
      <FlatList
        data={currencies}
        renderItem={({item}) => {
          return <RowItem text={item} onPress={() => navigation.pop()} />;
        }}
        keyExtractor={item => item}
        ItemSeparatorComponent={() => <RowSeparator />}
        ListFooterComponent={() => (
          <View style={{paddingBottom: insets.bottom}} />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default CurrencyList;
