import React from 'react';
import { TextInputProps } from 'react-native';

import { Container, Icon, TextInput } from './styles';

type Props = TextInputProps & {
  icon: string | undefined;
}

export function Input({ icon, ...rest }: Props) {
  return (
    <Container>
      <Icon name={icon} size={24} color="#D10408" />
      <TextInput placeholderTextColor={'#333'}  {...rest} />
    </Container>
  );
}