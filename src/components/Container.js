import React from 'react';
import {View, StatusBar} from 'react-native';

const Container = ({children, style}) => {
  return (
    <View style={{flex: 1, ...style}}>
      <StatusBar barStyle="light-content" />
      {children}
    </View>
  );
};

export default Container;
