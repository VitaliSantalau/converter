import React from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  StatusBar,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {format} from 'date-fns';

import colors from '../constants/colors';

import ConversionInput from '../components/ConversionInput';
import Button from '../components/Button';

const screen = Dimensions.get('window');

const Home = ({navigation}) => {
  const baseCurrency = 'USD';
  const quoteCurrency = 'GBP';
  const conversionRate = 0.8345;
  const date = new Date();

  return (
    <View style={styles.container}>
      <ScrollView>
        <StatusBar barStyle="light-content" backgroundColor={colors.blue} />

        <SafeAreaView>
          <TouchableOpacity
            style={styles.header}
            onPress={() => navigation.push('Options')}>
            <Text style={styles.headerBtn}>&gt;&gt;&gt;</Text>
          </TouchableOpacity>
        </SafeAreaView>

        <View style={styles.content}>
          <View style={styles.logoContainer}>
            <Image
              source={require('../assets/images/background.png')}
              style={styles.logoBack}
              resizeMode="contain"
            />
            <Image
              source={require('../assets/images/logo.png')}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>

          <Text style={styles.textHeader}>Currency Converter</Text>

          <ConversionInput
            text={baseCurrency}
            value="123"
            onButtonPress={() =>
              navigation.push('CurrencyList', {title: 'Base Currency'})
            }
          />
          <ConversionInput
            text={quoteCurrency}
            value="123"
            onButtonPress={() =>
              navigation.push('CurrencyList', {title: 'Quote Currency'})
            }
          />

          <Text style={styles.text}>
            {`1 ${baseCurrency} = ${conversionRate} ${quoteCurrency} as of ${format(
              date,
              'MMMM do, yyyy',
            )}.`}
          </Text>

          <Button text="Reverse Currencies" onPress={() => alert('todo')} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue,
  },
  content: {
    paddingTop: screen.height * 0.1,
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoBack: {
    width: screen.width * 0.45,
    height: screen.width * 0.45,
  },
  logo: {
    position: 'absolute',
    width: screen.width * 0.25,
    height: screen.width * 0.25,
  },
  textHeader: {
    color: colors.white,
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 20,
    textAlign: 'center',
  },
  text: {
    color: colors.white,
    fontSize: 13,
    textAlign: 'center',
  },
  header: {
    alignItems: 'flex-end',
    marginHorizontal: 20,
  },
  headerBtn: {
    color: colors.white,
    fontSize: 30,
  },
});

export default Home;
