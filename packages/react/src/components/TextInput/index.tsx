import { ComponentProps, ElementRef, forwardRef } from 'react'
import { Input, Prefix, TextInputContainer } from './styles'

export interface TextInputProps extends ComponentProps<typeof Input> {
  prefix?: string
}
function TextInputElement(
  { prefix, ...props }: TextInputProps,
  ref: ElementRef<typeof Input>
) {
  return (
    <TextInputContainer>
      {!!prefix && <Prefix>{prefix}</Prefix>}
      <Input ref={ref} {...props}></Input>
    </TextInputContainer>
  )
}

export const TextInput = forwardRef<ElementRef<typeof Input>, TextInputProps>(
  TextInputElement
)
