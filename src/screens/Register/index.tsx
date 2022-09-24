import React from 'react';
import { Button } from '../../components/Form/Button';
import { Input } from '../../components/Form/Input';
import { TransactionTypeButton } from '../../components/Form/TransactionTypeButton';

import {
  Container,
  Header,
  Title,
  Form,
  Fields,
  TansactionsTypes
} from "./styles";

export function Register(){
  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>
      <Form>
        <Fields>
          <Input
            placeholder="Nome"
          />
          <Input
            placeholder="Preço"
          />
          <TansactionsTypes>
            <TransactionTypeButton
              type='up'
              title='Income'
            />
            <TransactionTypeButton
              type='down'
              title='Outcome'
            />
          </TansactionsTypes>
        </Fields>
        <Button title="Enviar" />
      </Form>
    </Container>
  )
}
