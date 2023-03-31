import { AvatarContainer, AvatarFallback, AvatarImage } from './styles'
import { User } from 'phosphor-react'
import { ComponentProps } from '@stitches/react'

export interface AvatarImageProps extends ComponentProps<typeof AvatarImage> {}

export function Avatar(props: AvatarImageProps) {
  return (
    <AvatarContainer>
      <AvatarImage {...props} />
      <AvatarFallback delayMs={600}>
        <User />
      </AvatarFallback>
    </AvatarContainer>
  )
}
