import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

interface Props {
  isHome?: boolean;
}

export const Container = styled.View<Props>`
  width: 100%;
  height: ${({ isHome }) => isHome ? '184px' : '120px' };
  background-color: ${({ theme }) => theme.COLORS.RED_MAIN};

  flex-direction: row;
  justify-content: space-between;

  padding-top: ${({ isHome }) => isHome ? '64px' : '48px' };
  padding-bottom: ${({ isHome }) => isHome ? '64px' : '24px' };

  padding-left: 24px;
  padding-right: 24px;
`;

export const LeftContent = styled.View``;

export const WelcomeMessage = styled.Text`

  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 20px;

`;

export const MainDescription = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 12px;
`;

export const UserProfile = styled.TouchableOpacity``;

export const UserProfileImage = styled.Image`

  width: 48px;
  height: 48px;

  border-radius: 22px;
`;

export const HeaderTitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  
  font-size: 32px;
  font-weight: bold;
`;
