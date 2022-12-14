import React from 'react';

import { Container, LeftContent, OrderDate, OrderTitle, OrderTotal } from './styles';

export function Product() {
  return (
    <Container>
      <LeftContent>
        <OrderTitle>dale cancun - mexicano</OrderTitle>
        <OrderDate>pedido em 16/03/21</OrderDate>
      </LeftContent>

      <OrderTotal>R$ 2.131,33</OrderTotal>
    </Container>
  );
}
