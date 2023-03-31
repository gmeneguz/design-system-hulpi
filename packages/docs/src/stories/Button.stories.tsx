import React from 'react'
import { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonProps } from '@hulpi-ui/react'
import { ArrowRight } from 'phosphor-react'
export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Send',
    size: 'md',
    variant: 'primary',
    disabled: false,
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
      control: 'inline-radio',
    },
    size: {
      options: ['sm', 'md'],
      control: 'inline-radio',
    },
    disabled: {
      type: 'boolean',
    },
    onClick: {
      action: 'click',
    },
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}
export const Secondary: StoryObj<ButtonProps> = {
  args: {
    colorScheme: 'secondary',
  },
}
export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    colorScheme: 'tertiary',
    children: 'Cancel',
  },
}

export const Small: StoryObj<ButtonProps> = {
  args: {
    size: 'sm',
  },
}

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        Next Step <ArrowRight />{' '}
      </>
    ),
  },
}

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
  },
}
