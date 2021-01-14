import React from 'react';
import { Container, ImageProductBanner, ButtonProduct, ButtonProductText } from './styles'


const ProductBanner = () => (
<Container>
<ImageProductBanner source={{uri: 'http://ec2-54-237-155-186.compute-1.amazonaws.com/storage/images/banners/Fyy8pg6wMdgPeYnwZqZpywGdJDR29y5c2UAUevkP.jpg'}} />
    <ButtonProduct onPress={() => {}}>
    <ButtonProductText>CONFIRA</ButtonProductText>
    </ButtonProduct>
</Container>
)

export default ProductBanner