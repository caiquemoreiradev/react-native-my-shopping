import React from 'react';

import { MaterialIcons } from '@expo/vector-icons';

import { Container, Divider, OrderCountHighlight, OrderCountMessage, OrdersCountInfo } from './styles';

export function DeliveryOrdersCount() {
  return (
    <Container>

      <MaterialIcons name="delivery-dining" size={40} color="#fff" />

      <Divider />

      <OrdersCountInfo>
        <OrderCountMessage>Você fez
          <OrderCountHighlight> 14 pedidos </OrderCountHighlight>
          essa semana
        </OrderCountMessage>
      </OrdersCountInfo>
    </Container>
  );
}
