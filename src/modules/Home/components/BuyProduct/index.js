import React from 'react'
import { Container, ImageProductBanner, ButtonOption, ButtonBuyProduct, ButtonOptionText, TextProductName, TextDescount, TextPrice, TextParcel,ButtonProductText } from './styles'

import iconProduct from '../../../../images/iconProduct.png'

const BuyProduct = () => (
  <Container>
    <ImageProductBanner source={{ iconProduct }} />
    <ButtonOption onPress={() => { }}>
      <ButtonOptionText>+3 opções</ButtonOptionText>
    </ButtonOption>
    <TextProductName>Orofluido Hairspray - Finalizador - 500ml</TextProductName>
    <TextDescount>De: R$152,00</TextDescount>
    <TextPrice>Por: R$60,80</TextPrice>
    <TextParcel>2x de R$30,40</TextParcel>

    <ButtonBuyProduct onPress={() => { }}>
      <ButtonProductText>
        COMPRAR
      </ButtonProductText>
    </ButtonBuyProduct>
  </Container>
)

export default BuyProduct