import { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@hulpi-ui/react'
import React from 'react'

export default {
  title: 'Display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/gmeneguz.png',
    alt: 'Gian',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
