import { StoryObj, Meta } from '@storybook/react'
import { Heading, HeadingProps } from '@hulpi-ui/react'
import React from 'react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Testando Heading',
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'h1 Heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story: 'Por padrão Heading é h2 mas pode ser `h1` utilizando `as="h2"`',
      },
    },
  },
}
