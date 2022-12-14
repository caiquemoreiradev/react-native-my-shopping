import React from 'react';
import { ButtonIcon } from '../ButtonIcon';

import { Container, HeaderTitle, LeftContent, MainDescription, UserProfile, UserProfileImage, WelcomeMessage } from './styles';

interface Props {
  isHome?: boolean;
  title?: string;
}

export function Header({ isHome, title }: Props) {
  return (
    <Container isHome={isHome}>

      {isHome ? (
        <>
          <LeftContent>
            <WelcomeMessage>Olá, Caique</WelcomeMessage>
            <MainDescription>acompanhe seus gastos com delivery</MainDescription>
          </LeftContent>

          <UserProfile>
            <UserProfileImage source={{ uri: 'https://avatars.githubusercontent.com/u/56305107?v=4' }} />
          </UserProfile>
        </>
      ) : (
        <HeaderTitle>{title}</HeaderTitle>
      )}



    </Container>
  );
}
