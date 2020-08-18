import React from 'react';
import {ScrollView, Text} from 'react-native';
import {Container, Toolbar} from 'components';

const Transaction = () => {
  return (
    <Container>
      <Toolbar title="Transaction" />
      <ScrollView>
        <Text>Transaction</Text>
      </ScrollView>
    </Container>
  );
};

export default Transaction;
