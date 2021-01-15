import React from 'react'
import { Container, ImageProductBanner, ButtonProduct, ButtonProductText, ButtonOption, ButtonOptionText } from './styles'


const BuyProduct = () => (
  <Container>
  <ImageProductBanner source={{uri: 'http://ec2-54-237-155-186.compute-1.amazonaws.com/storage/images/banners/Fyy8pg6wMdgPeYnwZqZpywGdJDR29y5c2UAUevkP.jpg'}} />
  <ButtonOption onPress={() => {}}>
      <ButtonOptionText>+3 opções</ButtonOptionText>
      </ButtonOption>

  </Container>
  )

export default BuyProduct