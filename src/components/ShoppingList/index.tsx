import React, { useState } from 'react';
import { FlatList } from 'react-native';

import { Container, ListTitle, styles, TitleContainer } from './styles';
import { Product, ProductProps } from '../Product';

import { shoppingListExample } from '../../utils/shopping.list.data';

export function ShoppingList() {
  const [products, setProducts] = useState<ProductProps[]>(shoppingListExample);

  return (
    <Container>

      <TitleContainer>
        <ListTitle>Últimos pedidos</ListTitle>
      </TitleContainer>

      <FlatList
        data={products}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Product data={item} />}
        showsVerticalScrollIndicator={false}
        style={styles.list}
        contentContainerStyle={styles.content}
      />
    </Container>
  );
}
