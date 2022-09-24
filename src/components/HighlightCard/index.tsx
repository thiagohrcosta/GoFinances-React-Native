import React from 'react';
import {
  Container,
  Header,
  Title,
  Icon,
  Footer,
  Amount,
  LastTransaction
} from './styles';

export function HighlightCard() {
  return (
    <Container>
      <Header>
        <Title>Entrada</Title>
        <Icon name="arrow-up-circle"/>
      </Header>

      <Footer>
        <Amount>R$ 17.500,00</Amount>
        <LastTransaction>Última entrada 13 de abril</LastTransaction>
      </Footer>

    </Container>
  );
}