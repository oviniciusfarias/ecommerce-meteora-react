import { useLocation } from "react-router-dom"
import styled from "styled-components"

const CartIconStyled = styled.img`
  
`

const ButtonStyled = styled.button`
  background-color: #000;
  color: #000;
  border: none;
  display: ${props => props.$pageCart ? 'none' : 'inline-flex'};
  align-items: center;
  cursor: pointer;
  margin-left: 64px;
`

const CartCountStyled = styled.span`
  color: #DAFF01;
  font-size: 20px;
  margin-left: 4px;
`

const CartButton = ({ cartCount, handleCartDisplay }) => {

  const location = useLocation();
  const isCartPage = location.pathname === "/carrinho"

  return (
    <ButtonStyled
      $pageCart={isCartPage}
      onClick={handleCartDisplay}
    >
      <CartIconStyled src="/assets/cart.svg" />
      <CartCountStyled>{ cartCount }</CartCountStyled>
    </ButtonStyled>
  )
}

export default CartButton