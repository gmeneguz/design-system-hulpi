import { Check } from 'phosphor-react'
import React, { ComponentProps } from 'react'

import { Container, Indicator } from './styles'

export interface CheckboxProps extends ComponentProps<typeof Container> {}

export const Checkbox: React.FC<CheckboxProps> = (props) => {
  return (
    <Container {...props}>
      <Indicator asChild>
        <Check weight="bold" />
      </Indicator>
    </Container>
  )
}
