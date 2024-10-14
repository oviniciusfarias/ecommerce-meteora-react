import { Link } from "react-router-dom"
import styled from "styled-components"
import ContainerStyled from "../Container"
import Menu from "./Menu"
import SearchBar from "./SearchBar"
import CartButton from "./CartButton"
import { FiMenu } from "react-icons/fi"
import { useState } from "react"
import { useCartContext } from "../../hooks/useCartContext"

const HeaderStyled = styled.header`
  background-color: #000000;
  padding: 20px 0;
  position: relative;
  z-index: 2;
  & > div {
    max-width: 100%;
    padding: 0 64px;
    @media screen and (max-width: 420px) {
      padding: 0 32px;
    }
  }
  & > div > div > a {
    @media screen and (max-width: 420px) {
      flex-grow: 1;
    }
  }
`

const HeaderWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > a {
    margin-right: 64px;
    @media screen and (max-width: 420px) {
      margin-right: 0;
    }
  }
`

const HeaderMenuMobileWrapStyled = styled.div`
  display: flex;
  flex: 1;
  & > nav {
    flex: 1;
  }
  @media screen and (max-width: 420px) {
    display: ${props => props.$menuVisible ? 'flex' : 'none'};
    position: absolute;
    left: 0;
    width: 100%;
    flex-direction: column;
    top: 100%;
    z-index: 166;
    background-color: #000;
    padding: 16px 32px;
  }
`

const ButtonMenuStyled = styled.button`
  padding: 4px 8px;
  background-color: transparent;
  color: #fff;
  border: none;
  align-items: center;
  margin-right: -8px;
  display: none;
  @media screen and (max-width: 420px) {
    display: inline-flex;
  }
`

const Header = () => {

  const { cartCount, openCartDrawer } = useCartContext()
  
  const [menuIsVisible, setMenuVisibility] = useState(false)
  const handleMenuVisibility = (menuStatus) => {
    if (menuStatus === true || menuStatus === false) {
      setMenuVisibility(menuStatus)
    } else {
      setMenuVisibility(!menuIsVisible)
    }
  }
  
  return (
    <HeaderStyled>
      <ContainerStyled>
        <HeaderWrapperStyled>
          
          <Link to="/">
            <img src="/assets/images/logo-meteora.png" alt="Meteora" />
          </Link>

          <HeaderMenuMobileWrapStyled
            $menuVisible={menuIsVisible}
          >
            <Menu />
            <SearchBar />
          </HeaderMenuMobileWrapStyled>

          <CartButton
            cartCount={cartCount}
            handleOpenCartDrawer={openCartDrawer}
          />

          <ButtonMenuStyled
            type="button"
            onClick={() => handleMenuVisibility()}
          >
            <FiMenu size={32} />
          </ButtonMenuStyled>
        </HeaderWrapperStyled>
      </ContainerStyled>
    </HeaderStyled>
  )
}

export default Header