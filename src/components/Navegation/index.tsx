import routes from "../../data/routes";
import { NavegationItemProps } from "../../types/PropTypes";
import { BubbleContainer, BubbleContent, BubbleLinkContainer, CategoriesContainer, Navbrand, NavegationContainer } from "./components";

export default function Navegation() {
  return (
    <NavegationContainer id='navegation'>
      <Navbrand to='/'>Jiu Jitsu Dictionary</Navbrand>
      <CategoriesContainer>
        {
          routes.map((route, i) => {
            return (
              <NavegationItem name={route.route_name} path={route.route} icon={route.icon} key={i} />
            )
          })
        }
      </CategoriesContainer>
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
