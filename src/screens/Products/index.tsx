import React from 'react';

import { ShoppingList } from '../../components/ShoppingList';
import { DeliveryOrdersCount } from '../../components/DeliveryOrdersCount';
import { Header } from '../../components/Header';
import { Container } from './styles';

export function Products() {
  return (
    <Container>
      <Header isHome />
      <DeliveryOrdersCount />
      <ShoppingList />
    </Container>
  );
}
