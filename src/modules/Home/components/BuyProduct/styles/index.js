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
  marginTop: 25,
  alignItems: 'center',
  justifyContent: 'center',
})

export const ButtonOption = styled.TouchableOpacity({
  width: 71,
  height: 25,
  border: 1,
  backgroundColor: '#FFF',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 10
})


export const ButtonOptionText = styled.Text({
  color: '#000',
})

export const TextProductName = styled.Text({
  color: '#000',
  marginLeft: 34,
  marginTop: 8,
  alignItems: 'center',
  justifyContent: 'center',
})

export const TextDescount = styled.Text({
  color: '#000',
  marginTop: 29,
  color: '#D1D1D1',
  alignItems: 'center',
  justifyContent: 'center',
})

export const TextPrice = styled.Text({
  color: '#797979',
  marginTop: 9,
  alignItems: 'center',
  justifyContent: 'center',
})

export const TextParcel = styled.Text({
  color: '#000',
  marginTop: 7,
  alignItems: 'center',
  justifyContent: 'center',
})

export const ButtonProduct = styled.TouchableOpacity({
  width: 135,
  height: 28,
  marginTop: 20,
  backgroundColor: '#000',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 12
})

export const ButtonProductText = styled.Text({
  color: '#FFF',
})