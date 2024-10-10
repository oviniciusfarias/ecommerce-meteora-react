import { IoMdClose } from "react-icons/io"
import CartProduct from "./Product"
import { Link, useLocation } from "react-router-dom"
import styled from "styled-components"
import { formatMoney } from "../../utils/formatMoney"
import { useEffect } from "react"

const DialogStyled = styled.dialog`
  position: fixed;
  z-index: 2;
  background-color: rgba(0,0,0,0.5);
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  padding: 0;
  border: none;
`

const DialogContainerStyled = styled.form`
  background-color: #343A40;
  max-width: 440px;
  width: 50%;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  overflow: hidden;
  @media screen and (max-width: 420px) {
    width: 100%;
    max-width: 100%;
  }
`

const CartHeaderStyled = styled.div`
  background-color: #9353FF;
  padding: 16px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
`

const CartHeaderTitleStyled = styled.p`
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  margin: 0;
`

const CartCloseButtonStyled = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`

const WrapProductsStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 68vh;
  overflow: auto;
  padding: 0 32px;
  margin-bottom: 32px;
  &::-webkit-scrollbar {
    width: 20px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(0,0,0,0.3);
    border-radius: 20px;
    border: 6px solid transparent;
    background-clip: content-box;
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: rgba(0,0,0,0.6);
  }
`


const CartFooterStyled = styled.div`
  padding: 0 32px;
  & > a {
    width: 100%;
    background-color: #9353FF;
    text-align: center;
    color: #fff;
    font-size: 16px;
    text-decoration: none;
    display: block;
    padding: 16px 8px;
    border: 2px solid #9353FF;
    &:hover {
      background-color: transparent;
    }
  }
`

const CartPriceWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;
  & > span {
    color: #DAFF01;
    font-size: 24px;
    font-weight: 400;
  }

  & > span:first-child {
    flex-grow: 1;
  }
`

const CartDrawer = ({ 
    products, 
    cartDrawerStatus, 
    cartTotalValue,
    handleCartDisplay,
    handleAddProduct,
    handleRemoveProduct,
    handleRemoveProductFromCart
  }) => {

  const { pathname } = useLocation()
  
  useEffect(() => {
    handleCartDisplay(false)
  }, [pathname])

  return (
    <DialogStyled open={cartDrawerStatus} id="cartDrawer">
      <DialogContainerStyled method="dialog">
        <CartHeaderStyled>
          <CartHeaderTitleStyled>Carrinho de Compras</CartHeaderTitleStyled>

          <CartCloseButtonStyled formMethod="dialog" onClick={handleCartDisplay}>
            <IoMdClose size={26} color="#fff" />
          </CartCloseButtonStyled>
        </CartHeaderStyled>

        <WrapProductsStyled>
          {products.map(item => {
            return (
              <CartProduct 
                key={ item.id } 
                product={ item }
                handleAddProduct={handleAddProduct}
                handleRemoveProduct={handleRemoveProduct}
                handleRemoveProductFromCart={handleRemoveProductFromCart}
              />
            )
          })}
        </WrapProductsStyled>

        <CartFooterStyled>
          <CartPriceWrapperStyled>
            <span>Total:</span>
            <span>{ formatMoney(cartTotalValue) }</span>
          </CartPriceWrapperStyled>

          <Link to="/carrinho">
            Finalizar compra
          </Link>
        </CartFooterStyled>
      </DialogContainerStyled>
    </DialogStyled>
  )
}

export default CartDrawer