import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import { Container, EmailText, NameText, AssuntoText, InputEmail, InputNome, InputAssunto, ButtonText, ContainCheckbox, Checkbox, CheckboxFalse, CheckText, ButtonConfirm } from './styles';



const Contact = () => {

  const [check, setcheck] = useState(false);
  return (

      <Container>

        <EmailText>E-mail</EmailText>
        <InputEmail placeholder="bruno@teste.com" />


        <NameText>Nome</NameText>
        <InputNome placeholder="Bruno Souza" />


        <AssuntoText>Assunto</AssuntoText>
        <InputAssunto placeholder="Corebiz Gobeyond" />

        <ContainCheckbox onPress={() => setcheck(!check)}>
          {check ? <Checkbox/> : <CheckboxFalse/>}
          <Checkbox />
          <CheckText>Autorizo</CheckText>
        </ContainCheckbox>

        <ButtonConfirm onPress={() => { }}>
          <ButtonText>Enviar formulário</ButtonText>
        </ButtonConfirm>
      </Container>
  )

}

export default Contact