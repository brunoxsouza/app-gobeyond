import styled from 'styled-components/native'

export const Container = styled.SafeAreaView({
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF'
})

export const ImageBanner = styled.Image({
    width: 380,
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
})

export const ButtonAd = styled.TouchableOpacity({
  width: 95,
  height: 28,
  right: 22,
  position: 'absolute',
  backgroundColor: '#000',
  alignItems: 'center',
  justifyContent: 'center',
})

export const ButtonAdText = styled.Text({
  color: '#FFF',
})