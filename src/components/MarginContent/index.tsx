import React, { ReactElement } from 'react'
import styled from 'styled-components'

const MarginContentContainer = styled.div`
    margin: 0 20vw;
`

export default function MarginContent(props:{children:ReactElement}) {
  return (
    <MarginContentContainer>
        {props.children}
    </MarginContentContainer>
  )
}
