import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {ifIphoneX} from 'react-native-iphone-x-helper';

const Toolbar = ({left, title = '', right}) => {
  return (
    <View style={styles.header}>
      {left ? left() : null}
      <Text style={styles.title}>{title}</Text>
      {right ? right() : null}
    </View>
  );
};

export default Toolbar;

const styles = StyleSheet.create({
  header: {
    // position: 'absolute',
    // top: 0,
    // left: 0,
    // right: 0,
    // zIndex: 1,
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#ff000090',
    ...ifIphoneX(
      {
        paddingTop: 50,
      },
      {
        paddingTop: 20,
      },
    ),
  },
  title: {
    fontWeight: '600',
    flex: 1,
    color: 'white',
    marginHorizontal: 10,
  },
});
