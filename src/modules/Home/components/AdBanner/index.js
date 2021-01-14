import React from 'react';
import { Container, ImageBanner, ButtonAd, ButtonAdText } from './styles'

const AdBanner = () => (

  <Container>
    <ImageBanner source={{ uri: 'http://ec2-54-237-155-186.compute-1.amazonaws.com/storage/images//banners/s9OhVEL3UqqNydOtUL7CIQARwE3V47VdZCPIwgH7.png' }} />
    <ButtonAd onPress={() => { }}>
      <ButtonAdText>CONFERIR</ButtonAdText>
    </ButtonAd>
  </Container>

)
export default AdBanner
