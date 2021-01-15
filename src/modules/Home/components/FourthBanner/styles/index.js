import styled from 'styled-components/native'
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window')

export const Container = styled.SafeAreaView({
    flex: 1,
    paddingTop: 6,
})

export const ContainerSlide = styled.View({
    width,
    height: 361,
})

export const ImageSlide = styled.Image({
    height: '100%',
})


export const ButtonMore = styled.TouchableOpacity({
    width: 147,
    height: 33,
    top: 340,
    right: 133,
    position: 'absolute',
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
})

export const TextButtonMore = styled.Text({
   color: '#FFF',
   fontSize: 16
})