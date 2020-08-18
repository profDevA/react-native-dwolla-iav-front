import React from 'react';
import {ScrollView, Text} from 'react-native';
import {Container, Toolbar} from 'components';

const Cart = () => {
  return (
    <Container>
      <Toolbar title="Cart" />
      <ScrollView>
        <Text>Cart</Text>
      </ScrollView>
    </Container>
  );
};

export default Cart;
