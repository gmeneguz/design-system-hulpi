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
  function TextInputElement({ prefix, size, ...props }, ref) {
    return (
      <TextInputContainer size={size}>
        {!!prefix && <Prefix>{prefix}</Prefix>}
        <Input ref={ref as any} size={size} {...props}></Input>
      </TextInputContainer>
    )
  }
)
