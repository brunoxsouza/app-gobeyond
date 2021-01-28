import styled from 'styled-components/native'
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window')

export const Container = styled.SafeAreaView({
    flex: 1,
})

export const ContainerSlide = styled.View({
    width,
    height: 344,
    marginTop: 54,
    marginBottom: 51,
})

export const ImageSlide = styled.Image({
    height: '100%',
})


export const ButtonMore = styled.TouchableOpacity({
    width: 147,
    height: 33,
    top: 328,
    right: 116,
    position: 'absolute',
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
})

export const TextButtonMore = styled.Text({
   color: '#FFF',
   fontSize: 16
})