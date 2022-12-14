import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;

  justify-content: space-between;
  align-items: center;

  margin: 16px 0;
`;

export const LeftContent = styled.View``;

export const OrderTitle = styled.Text`
  margin-bottom: 2px;

  font-size: 16px;
  font-weight: bold;

  color: ${({ theme }) => theme.COLORS.GRAY_DARK};
`;

export const OrderDate = styled.Text`
  font-size: 13px;

  color: ${({ theme }) => theme.COLORS.GRAY_DARK};`;

export const OrderTotal = styled.Text`
  font-size: 16px;
  font-weight: bold;

  color: ${({ theme }) => theme.COLORS.GRAY_DARK};
`;


