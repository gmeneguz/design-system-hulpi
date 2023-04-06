import * as Checkbox from '@radix-ui/react-checkbox'
import { styled, keyframes } from '../../styles'

export const Container = styled(Checkbox.Root, {
  all: 'unset',
  width: '$6',
  height: '$6',
  backgroundColor: '$gray900',
  borderRadius: '$xs',
  lineHeight: 0,
  cursor: 'pointer',
  overflow: 'hidden',
  boxSizing: 'border-box',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: '2px solid $gray900',

  '&[data-state="checked"]': {
    backgroundColor: '$hulpi300',
  },

  '&:focus, &[data-state="checked"]': {
    border: '2px solid $hulpi300',
  },
})

const slideIn = keyframes({
  from: {
    width: 0,
    height: 0,
  },
  to: {
    width: '$4',
    height: '$4',
  },
})
const slideOut = keyframes({
  from: {
    transform: 'translateY(0)',
  },
  to: {
    transform: 'translateY(-100%)',
  },
})

export const Indicator = styled(Checkbox.Indicator, {
  color: '$white',
  width: '$4',
  height: '$4',

  '&[data-state="checked"]': {
    animation: `${slideIn} 300ms ease-out`,
  },
  '&[data-state="unchecked"]': {
    animation: `${slideOut} 200ms ease-out`,
  },
})

Container.displayName = 'Checkbox'
