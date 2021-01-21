import React from 'react'
import { Container, ImageProductBanner, ButtonOption, ButtonProduct, ButtonOptionText, TextProductName, TextDescount, TextPrice, TextParcel,ButtonProductText } from './styles'


const BuyProduct = () => (
  <Container>
    <ImageProductBanner source={{ uri: 'http://ec2-54-237-155-186.compute-1.amazonaws.com/storage/images/banners/Fyy8pg6wMdgPeYnwZqZpywGdJDR29y5c2UAUevkP.jpg' }} />
    <ButtonOption onPress={() => { }}>
      <ButtonOptionText>+3 opções</ButtonOptionText>
    </ButtonOption>
    <TextProductName>Orofluido Hairspray - Finalizador - 500ml</TextProductName>
    <TextDescount>De: R$152,00</TextDescount>
    <TextPrice>Por: R$60,80</TextPrice>
    <TextParcel>2x de R$30,40</TextParcel>

    <ButtonProduct onPress={() => { }}>
      <ButtonProductText>
        COMPRAR
      </ButtonProductText>
    </ButtonProduct>
  </Container>
)

export default BuyProduct