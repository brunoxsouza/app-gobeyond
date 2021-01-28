import styled from 'styled-components/native'

export const Container = styled.SafeAreaView({
    height: 104,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
  borderBottomColor: '#3E3E3E',
})

export const ButtonBack = styled.TouchableOpacity({
  width: 6,
  height: 15,
  top: 22,
  left: 16,
})

export const Text = styled.Text({
    width: 172,
    height: 39,
    paddingLeft: 50,
    fontSize: 16,
    top: 20,
    color: '#000'
})