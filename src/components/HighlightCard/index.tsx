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

interface Props {
  title: string;
  amount: string;
  lastTrasaction: string;
  type: 'up' | 'down' | 'total';
}

const icon = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle',
  total: 'dollar-sign'
}
export function HighlightCard({
  title,
  amount,
  lastTrasaction,
  type
}: Props) {
  return (
    <Container type={type} >
      <Header>
        <Title type={type}>
          {title}
        </Title>
        <Icon
          name={icon[type]}
          type={type}
        />
      </Header>

      <Footer>
        <Amount type={type}>
          {amount}
        </Amount>
        <LastTransaction type={type}>
          {lastTrasaction}
        </LastTransaction>
      </Footer>

    </Container>
  );
}
