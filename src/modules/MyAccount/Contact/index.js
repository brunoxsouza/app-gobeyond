import React, { useState } from 'react';
import HeaderBar from '../HeaderBar';
import { Container, Text, Input, TextArea, ButtonText, ContainCheckbox, Checkbox, CheckboxFalse, CheckText, ButtonConfirm } from './styles';



const Contact = () => {

  const [check, setcheck] = useState(false);
  return (

    <Container>
      <HeaderBar />
      <Text>E-mail</Text>
      <Input placeholder="alice.ramos@teste.com" />


      <Text>Nome</Text>
      <Input placeholder="Alice da Silva Ramos" />


      <Text>Assunto</Text>
      <Input placeholder="Alice da Silva Ramos" />

      <Text>Mensagem</Text>
      <TextArea
        placeholder="Alice da Silva Ramos"
        multiline={true}
        numberOfLines={10}
      />

      <ContainCheckbox onPress={() => setcheck(!check)}>
        {check ? <Checkbox /> : <CheckboxFalse />}
        <CheckText>Autorizo envio de e-mails</CheckText>
      </ContainCheckbox>

      <ButtonConfirm onPress={() => { }}>
        <ButtonText>Enviar formulário</ButtonText>
      </ButtonConfirm>
    </Container>
  )

}

export default Contact