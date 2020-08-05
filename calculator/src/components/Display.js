import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  diplay: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
    alignItems: 'flex-end'
  },
  diplayValue: {
    fontSize: 60,
    color: '#fff'
  }
});

export default props =>
  <View style={styles.diplay}>
    <Text
      style={styles.diplayValue}
      numberOfLines={1}
    >
      {props.value}
    </Text>
  </View>