import { NavLink } from "react-router-dom"
import styled from "styled-components"

const NavStyled = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 32px;
  a {
    color: #FFFFFF;
    text-decoration: none;
  }
  @media screen and (max-width: 420px) {
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 32px;
  }
`

const Menu = () => {
  return (
    <NavStyled>
      <NavLink to="/">
        Nossas lojas
      </NavLink>
      <NavLink to="/">
        Novidades
      </NavLink>
      <NavLink to="/">
        Promoções
      </NavLink>
    </NavStyled>
  )
}

export default Menu