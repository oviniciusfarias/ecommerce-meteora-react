import { Link, NavLink } from "react-router-dom"
import styled from "styled-components"
import ContainerStyled from "../Container"
import Menu from "./Menu"
import SearchBar from "./SearchBar"
import CartButton from "./CartButton"

const HeaderStyled = styled.header`
  background-color: #000000;
  padding: 20px 0;
  & > div {
    max-width: 100%;
    padding: 0 64px;
  }
`

const HeaderWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const HeaderColumnStyled = styled.div`
  display: flex;
  gap: 32px;
`

const Header = ({ cartCount, handleCartDisplay }) => {
  return (
    <HeaderStyled>
      <ContainerStyled>
        <HeaderWrapperStyled>
          <HeaderColumnStyled>
            <Link to="/">
              <img src="/assets/images/logo-meteora.png" alt="Meteora" />
            </Link>

            <Menu />
          </HeaderColumnStyled>

          <HeaderColumnStyled>
            <SearchBar />
            
            <CartButton
              handleCartDisplay={handleCartDisplay}
              cartCount={cartCount}
            />
          </HeaderColumnStyled>
        </HeaderWrapperStyled>
      </ContainerStyled>
    </HeaderStyled>
  )
}

export default Header