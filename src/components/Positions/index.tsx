import { PositionsProps, PositionProps } from "../../types/PropTypes"
import { PositionContainerLink, PositionsContainer, PositionImg, PositionContainer, PositionTitle } from "./components"

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
    <PositionContainerLink to={props.route}>
      <PositionContainer>
        <PositionImg src={props.img}/>
        <PositionTitle>{props.name}</PositionTitle>
      </PositionContainer>
    </PositionContainerLink>
  )
}