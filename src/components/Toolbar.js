import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';

const Toolbar = ({left, title = '', right}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {left ? left() : null}
        <Text style={styles.title}>{title}</Text>
        {right ? right() : null}
      </View>
    </View>
  );
};

export default Toolbar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ff000090',
    paddingTop: getStatusBarHeight(true),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
  },
  title: {
    fontWeight: '600',
    flex: 1,
    color: 'white',
    marginHorizontal: 10,
    fontSize: 16,
    textAlign: 'center',
  },
});
