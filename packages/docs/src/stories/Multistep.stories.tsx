import { StoryObj, Meta } from '@storybook/react'
import { Box, Text, Multistep, MultistepProps } from '@hulpi-ui/react'
import React from 'react'

export default {
  title: 'Form/Multi Step',
  component: Multistep,
  args: {
    currentStep: 1,
    size: 4,
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<MultistepProps>

export const Primary: StoryObj<MultistepProps> = {}

export const Full: StoryObj<MultistepProps> = {
  args: {
    currentStep: 4,
    size: 4,
  },
}
