import styled from 'styled-components/native'

export const Container = styled.SafeAreaView({
  backgroundColor: '#FFF',
  height: '100%',
  top: 100
})

export const EmailText = styled.Text({
  fontSize: 14,
  left: 31,
})

export const NameText = styled.Text({
  fontSize: 14,
  left: 31,

})

export const AssuntoText = styled.Text({
  fontSize: 14,
  left: 31,
})

export const InputEmail = styled.TextInput({
  width: 320,

  borderColor: 'gray', 
  borderTopWidth: 0,
  borderRightWidth: 0,
  borderLeftWidth: 0,

  borderWidth: 1,
  left: 31,
  right: 31,
})

export const InputNome = styled.TextInput({
  width: 320,
  borderColor: 'gray', 
  borderTopWidth: 0,
  borderRightWidth: 0,
  borderLeftWidth: 0,

  borderWidth: 1,
  right: 31,
  left: 31,
})

export const InputAssunto = styled.TextInput({
  width: 320,
  borderColor: 'gray', 
  borderTopWidth: 0,
  borderRightWidth: 0,
  borderLeftWidth: 0,
  borderWidth: 1,
  left: 31,
})

export const ButtonConfirm = styled.TouchableOpacity({
  backgroundColor: '#000',

  width: 415,
  height: 72,
  top: 30,
  alignItems: 'center',
  justifyContent: 'center',
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