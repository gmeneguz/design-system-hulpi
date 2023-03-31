import { styled } from '../styles'
import { ComponentProps, ElementType } from 'react'

export const Button = styled('button', {
  all: 'unset',
  borderRadius: '$sm',
  fontSize: '$sm',
  fontWeight: '$medium',
  fontFamily: '$default',
  textAlign: 'center',
  minWidth: 120,
  boxSizing: 'border-box',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',
  cursor: 'pointer',

  '&:disabled': {
    cursor: 'not-allowed',
  },

  svg: {
    width: '$4',
    height: '$4',
  },

  variants: {
    colorScheme: {
      primary: {
        color: '$white',
        backgroundColor: '$hulpi500',
        '&:not(:disabled):hover': {
          backgroundColor: '$hulpi300',
        },
        '&:disabled': {
          backgroundColor: '$gray200',
        },
      },
      secondary: {
        color: '$hulpi300',
        border: '2px solid $hulpi500',
        '&:not(:disabled):hover': {
          backgroundColor: '$hulpi500',
          color: '$white',
        },
        '&:disabled': {
          color: '$gray200',
          borderColor: '$gray200',
        },
      },
      tertiary: {
        color: '$gray100',

        '&:not(:disabled):hover': {
          color: '$white',
        },
        '&:disabled': {
          color: '$gray600',
        },
      },
    },
    size: {
      md: {
        height: 46,
      },
      sm: {
        height: 38,
      },
    },
  },
  defaultVariants: {
    colorScheme: 'primary',
    size: 'md',
  },
})
export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType
}

Button.displayName = 'Button'
