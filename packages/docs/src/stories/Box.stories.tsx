import { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps, Text } from '@hulpi-ui/react'
import React from 'react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: <Text>Testando Box</Text>,
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
