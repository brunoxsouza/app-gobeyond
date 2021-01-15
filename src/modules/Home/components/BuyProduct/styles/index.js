import styled from 'styled-components/native'

export const Container = styled.SafeAreaView({
  width: 185,
  height: 344,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#FFF'
})

export const ImageProductBanner = styled.Image({
  width: 135,
  height: 135,
  alignItems: 'center',
  justifyContent: 'center',
})

export const ButtonOption = styled.TouchableOpacity({
  width: 135,
  height: 28,
  marginTop: 159,
  position: 'absolute',
  backgroundColor: '#FFF',
  alignItems: 'center',
  justifyContent: 'center',
})


export const ButtonOptionText = styled.Text({
  color: '#000',
})

export const ButtonProduct = styled.TouchableOpacity({
  width: 135,
  height: 28,
  marginTop: 330,
  position: 'absolute',
  backgroundColor: '#000',
  alignItems: 'center',
  justifyContent: 'center',
})

export const ButtonProductText = styled.Text({
  color: '#FFF',
})