import styled from 'styled-components/native'

export const Container = styled.SafeAreaView({
  paddingHorizontal: 31.5,
  backgroundColor: '#FFF',
  width: 414,
  height: 603,
})

export const Text = styled.Text({
  marginTop: 22.5,
  marginBottom: 8.5,
  color: '#3E3E3E',
})

export const Input = styled.TextInput({
  borderBottomColor: '#3E3E3E',
  borderBottomWidth: 1,
  paddingVertical: 7.5,
  fontSize: 14
})

export const ButtonConfirm = styled.TouchableOpacity({
  backgroundColor: '#000',
  top: 535,
  width: 415,
  height: 72,
  position: 'absolute',
  alignItems: 'center',
  justifyContent: 'center',
  paddingRight: 23,
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
  borderColor: '#3E3E3E',
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
  fontSize: 14,
  color: '#3E3E3E',
})

export const TextArea = styled.TextInput({
  borderBottomColor: '#999',
  borderBottomWidth: 1,
  paddingVertical: 7.5,
  fontSize: 14,
  height: 100,
  color: '#3E3E3E'
})