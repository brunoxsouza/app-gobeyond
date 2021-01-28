import React from 'react'
import { Image, SafeAreaView } from 'react-native'
import { Container, ContainerMenu, ContainerMenuButtons, ProfileImage, TextProfile, ViewLinha, ButtonHome, ButtonCategories, ButtonHeart, ButtonBag, ButtonOrders, TextHome, TextCategories, TextHeart, TextBag, TextOrders } from './styles'

import imageAccount from '../../../../images/imageAccount.png'
import iconHome from '../../../../images/iconHome.png'
import iconCategories from '../../../../images/iconCategories.png'
import iconHeart from '../../../../images/iconHeart.png'
import iconBag from '../../../../images/iconBag.png'
import iconOrders from '../../../../images/iconOrders.png'

const Profile = () => {

  return (
    <Container>
      <SafeAreaView>

        <ContainerMenu>
          <ProfileImage source={imageAccount} />
          <TextProfile>Olá Alice. Bem Vinda!</TextProfile>

          <ViewLinha></ViewLinha>

<ContainerMenuButtons>
      <ButtonHome onPress={() => { }}>
      <Image source={iconHome} />
          <TextHome>Home</TextHome>
      </ButtonHome>

        <ButtonCategories onPress={() => { }}>
          <Image source={iconCategories} />
          <TextCategories>Categorias</TextCategories>
        </ButtonCategories>

        <ButtonHeart onPress={() => { }}>
          <Image source={iconHeart} />
          <TextHeart>Favoritos</TextHeart>
        </ButtonHeart>

        <ButtonBag onPress={() => { }}>
          <Image source={iconBag} />
          <TextBag>Minha Sacola</TextBag>
        </ButtonBag>

        <ButtonOrders onPress={() => { }}>
          <Image source={iconOrders} />
          <TextOrders>Meus Pedidos</TextOrders>
        </ButtonOrders>
        </ContainerMenuButtons>
      </ContainerMenu>
      </SafeAreaView>
    </Container >
  )
}

export default Profile