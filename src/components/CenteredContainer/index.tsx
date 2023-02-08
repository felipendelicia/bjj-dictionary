import { ContainerProps } from '../../types/PropTypes'
import { Center } from './components'

export default function CenteredContainer({children}:ContainerProps) {
  return (
    <Center>
        {children}
    </Center>
  )
}
