import { StoryObj, Meta } from '@storybook/react'
import { Box, Text, Textarea, TextareaProps } from '@hulpi-ui/react'
import React from 'react'

export default {
  title: 'Form/Text Area',
  component: Textarea,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">Observations:</Text>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TextareaProps>

export const Primary: StoryObj<TextareaProps> = {
  args: {
    placeholder: 'add obs..',
  },
}

export const Disabled: StoryObj<TextareaProps> = {
  args: {
    disabled: true,
  },
}

// export const CustomTag: StoryObj<TextareaProps> = {
//   args: {
//     children: 'Strong Textarea',
//     as: 'strong',
//   },
// }
