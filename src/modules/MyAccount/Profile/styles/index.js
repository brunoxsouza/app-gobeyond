import styled from 'styled-components/native'

export const Container = styled.SafeAreaView({
  backgroundColor: '#FFF',
  height: '100%',
})

export const ContainerMenu = styled.SafeAreaView({
  width: 340,
  height: 408,
  top: 80,
  left: 28,
  backgroundColor: '#FFF',
})

export const ContainerMenuButtons = styled.SafeAreaView({
  width: 151,
  height: 293,
  top: 31,
  left: 20,
})

export const ProfileImage = styled.Image({
  width: 60,
  height: 60,
})

export const TextProfile = styled.Text({
  color: '#000',
  position: 'absolute',
  width: 79,
  height: 38,
  fontSize: 15,
  left: 80,
  top: 9,
})

export const ViewLinha = styled.View({
  borderBottomColor: 'black', 
  borderBottomWidth: 1,
  top: 23,
})

export const ButtonHome = styled.TouchableOpacity({
  flex: 1,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start'
})

export const TextHome = styled.Text({
  color: '#000',
  fontSize: 16,
  left: 20,
})

export const ButtonCategories = styled.TouchableOpacity({
  flex: 1,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start'
})

export const TextCategories = styled.Text({
  color: '#000',
  fontSize: 16,
  left: 23,
})

export const ButtonHeart = styled.TouchableOpacity({
  

  flex: 1,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start'
})

export const TextHeart = styled.Text({
  color: '#000',
  fontSize: 16,
  left: 23,
})

export const ButtonBag = styled.TouchableOpacity({
  

  flex: 1,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start'
})
export const TextBag = styled.Text({
  color: '#000',
  fontSize: 16,
  left: 22,
})

export const ButtonOrders = styled.TouchableOpacity({
  
  flex: 1,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start'
})

export const TextOrders = styled.Text({
  color: '#000',
  fontSize: 16,
  left: 25,
})