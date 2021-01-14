import styled from 'styled-components/native'

export const Container = styled.SafeAreaView({
    height: 500,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF'
})

export const ImageProductBanner = styled.Image({
    width: 380,
    height: 344,
    alignItems: 'center',
    justifyContent: 'center',
})

export const ButtonProduct = styled.TouchableOpacity({
  width: 147,
  height: 33,
  bottom: 60,
  position: 'absolute',
  backgroundColor: '#000',
  alignItems: 'center',
  justifyContent: 'center',
})

export const ButtonProductText = styled.Text({
  color: '#FFF',
})