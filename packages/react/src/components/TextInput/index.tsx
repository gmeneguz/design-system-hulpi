import {
  ComponentProps,
  ElementRef,
  forwardRef,
  InputHTMLAttributes,
} from 'react'
import { Input, Prefix, TextInputContainer } from './styles'

export interface TextInputProps extends ComponentProps<typeof Input> {
  prefix?: string
}

export const TextInput = forwardRef<ElementRef<typeof Input>, TextInputProps>(
  function TextInputElement({ prefix, ...props }, ref) {
    return (
      <TextInputContainer>
        {!!prefix && <Prefix>{prefix}</Prefix>}
        <Input ref={ref as any} {...props}></Input>
      </TextInputContainer>
    )
  }
)
