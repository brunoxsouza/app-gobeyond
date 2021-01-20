import styled from 'styled-components/native'

export const Container = styled.SafeAreaView({
  paddingHorizontal: 31.5
})

export const Text = styled.Text({
  marginTop: 22.5,
  marginBottom: 8.5
})

export const Input = styled.TextInput({
  borderBottomColor: '#999',
  borderBottomWidth: 1,
  paddingVertical: 7.5,
  fontSize: 14
})

export const ButtonConfirm = styled.TouchableOpacity({
  backgroundColor: '#000',
  top: 635,
  width: 415,
  height: 72,
  position: 'absolute',
  alignItems: 'center',
  justifyContent: 'center'
})

export const ButtonText = styled.Text({
  color: '#FFF',
  fontSize: 16,
})


export const ContainCheckbox = styled.TouchableOpacity({
  flexDirection: "row",
  marginTop: 22.5,
  alignItems: 'center'
})

export const Checkbox = styled.View({
  borderColor: '#000',
  borderWidth: 1,
  width: 18,
  height: 18,
  backgroundColor: '#000'

})

export const CheckboxFalse = styled.View({
  borderColor: '#000',
  borderWidth: 1,
  width: 18,
  height: 18,
  backgroundColor: '#FFF'

})
export const CheckText = styled.Text({
  marginLeft: 18,
  fontSize: 14
})

export const TextArea = styled.TextInput({
  borderBottomColor: '#999',
  borderBottomWidth: 1,
  paddingVertical: 7.5,
  fontSize: 14,
  height: 100
})