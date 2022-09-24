import React from 'react';
import { Text } from 'react-native';
import { HighlightCard } from '../../components/HighlightCard';

import {
  Container,
  Header,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  UserWrapper,
  Icon,
  HighlightCards,
 } from './styles';

export function Dashboard() {
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo source={{uri: 'https://avatars.githubusercontent.com/u/28869405?v=4'}}/>
            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Thiago</UserName>
            </User>
          </UserInfo>
          <Icon name="power"/>
        </UserWrapper>
      </Header>
      <HighlightCards>
        <HighlightCard type="up" title="Entradas" amount="R$ 17.400,00" lastTrasaction='Última entrada dia 13 de abril'/>
        <HighlightCard type="down" title="Saídas" amount="R$ 1.259,00" lastTrasaction='Última entrada dia 03 de abril'/>
        <HighlightCard type="total" title="Total" amount="R$ 16.141,00" lastTrasaction='01 à 16 de abril'/>
      </HighlightCards>
    </Container>
  );
}
