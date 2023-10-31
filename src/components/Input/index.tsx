import { TextInput, TextInputProps } from 'react-native'

import { Container, InputTypeStyleProps } from './styles'

type InputProps = TextInputProps & {
  inputRef?: React.RefObject<TextInput>
  type?: InputTypeStyleProps
}

export function Input({ type = 'md', inputRef, ...rest }: InputProps) {
  return <Container type={type} ref={inputRef} {...rest} />
}
