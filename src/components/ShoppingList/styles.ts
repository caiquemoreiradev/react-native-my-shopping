import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const styles = StyleSheet.create({
  list: {
    width: '100%',
  },
  content: {
    paddingBottom: 100
  }
});

export const Container = styled.View`
  padding: 0 24px;
`;

export const TitleContainer = styled.View`
  margin: 16px 0 24px;

  padding-bottom: 16px;

  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_DARK};
`;

export const ListTitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_DARK};

  font-size: 20px;
  font-weight: bold;
`;