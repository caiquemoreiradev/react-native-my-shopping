import styled, { css } from 'styled-components/native';

import { MaterialIcons } from '@expo/vector-icons'; 

export const Container = styled.View`
  
  width: 327px;

  padding: 4px 16px;

  flex-direction: row;
  align-items: center;

  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_DARK};
`;

export const Icon = styled(MaterialIcons)``;

export const TextInput = styled.TextInput`

  flex: 1;

  height: 60px;
  border-radius: 8px;
  
  padding: 8px 16px;
`;