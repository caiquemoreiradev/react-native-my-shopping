import styled from 'styled-components/native';

export const Container = styled.View`

  height: 80px;

  flex-direction: row;
  align-items: center;

  border-radius: 8px;

  padding: 16px 32px;
  margin: -40px 24px 24px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_DARK};
`;

export const Divider = styled.View`
  width: 1px;
  height: 32px;

  margin: 0 24px;

  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const OrdersCountInfo = styled.View`
  width: 140px;
`;

export const OrderCountMessage = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const OrderCountHighlight = styled.Text`
  font-weight: bold;
`;
