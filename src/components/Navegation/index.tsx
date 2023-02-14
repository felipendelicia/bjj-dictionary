import routes from "../../data/routes";
import { NavegationItemProps } from "../../types/PropTypes";
import { BubbleContainer, BubbleContent, BubbleLinkContainer, NavegationContainer} from "./components";

export default function Navegation() {
  return (
    <NavegationContainer id='navegation'>
      {
        routes.map((route, i) => {
          return (
            <NavegationItem name={route.route_name} path={route.route} icon={route.icon} key={i} />
          )
        })
      }
    </NavegationContainer>
  )
}

const NavegationItem = ({ name, path, icon }: NavegationItemProps) => {
  return (
    <BubbleContainer>
      <BubbleLinkContainer to={path}>
        <BubbleContent>{icon}</BubbleContent>
        <BubbleContent>{name}</BubbleContent>
      </BubbleLinkContainer>
    </BubbleContainer>
  )
}
