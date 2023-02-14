import { PositionsProps, PositionProps } from "../../types/PropTypes"
import { PositionContainer, PositionsContainer } from "./components"

export default function Positions(props:PositionsProps) {
  return (
    <PositionsContainer>
      {
        props.positions.map((position, i)=>{
          return(
            <Position key={i} {...position}/>
          )
        })
      }
    </PositionsContainer>
  )
}

const Position = (props:PositionProps) => {
  return (
    <PositionContainer>
      {props.name}
    </PositionContainer>
  )
}