import { CenteredContainerProps } from '../../types/PropTypes'
import { Center } from './components'

export default function CenteredContainer({children}:CenteredContainerProps) {
  return (
    <Center>
        {children}
    </Center>
  )
}
