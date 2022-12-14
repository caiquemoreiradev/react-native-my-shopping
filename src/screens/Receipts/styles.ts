import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  align-items: center;

  padding: 24px;
`;

export const OrderPrintTitle = styled.Text`
  margin: 24px 0 0;

  font-size: 20px;
  color: ${({ theme }) => theme.COLORS.GRAY_DARK};
  font-weight: bold;
`;

export const PhotoInfo = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.COLORS.GRAY900};
  font-family:${({ theme }) => theme.FONTS.REGULAR};
`;