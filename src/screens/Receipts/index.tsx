import React from 'react';
import { FlatList } from 'react-native';

import { Container, OrderPrintTitle, PhotoInfo } from './styles';
import { Header } from '../../components/Header';
import { Photo } from '../../components/Photo';
import { File } from '../../components/File';

import { photosData } from '../../utils/photo.data';
import { Input } from '../../components/Input';

export function Receipts() {
  return (
    <Container>

      <Input icon='drive-file-rename-outline' placeholder='nome do pedido' />
      <Input icon='attach-money' placeholder='valor do pedido' />
      <Input icon='date-range' placeholder='data do pedido' />

      <OrderPrintTitle>Print do pedido</OrderPrintTitle>

      <Photo uri="" />

      <PhotoInfo>
        Informações da foto
      </PhotoInfo>

    </Container>
  );
}
