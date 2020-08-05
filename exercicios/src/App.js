import React from 'react';
import { View, StyleSheet } from 'react-native';

import Simples from './components/Simples';
import ParImpar from './components/ParImpar';
import Inverter, { MegaSena } from './components/Multi';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Simples texto='Flexivel!!!!!' />
        <ParImpar numero={221038} />
        <Inverter texto='React Nativo!' />
        <MegaSena numeros={7}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});