import { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@hulpi-ui/react'
import React from 'react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children: 'Testando Text',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
