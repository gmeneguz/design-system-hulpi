import React from 'react'

import { Container, Label, Step, Steps } from './styles'

export interface MultistepProps {
  size: number
  currentStep?: number
}

export const Multistep: React.FC<MultistepProps> = ({
  size,
  currentStep = 1,
}) => {
  return (
    <Container>
      <Label>
        Passo {currentStep} de {size}
      </Label>
      <Steps css={{ '--step-size': size }}>
        {Array.from({ length: size }).map((_, idx) => (
          <Step key={idx} active={currentStep >= idx + 1} />
        ))}
      </Steps>
    </Container>
  )
}
