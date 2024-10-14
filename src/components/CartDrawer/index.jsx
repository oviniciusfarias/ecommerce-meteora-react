import { IoMdClose } from "react-icons/io"
import CartProduct from "./Product"
import { Link, useLocation } from "react-router-dom"
import styled from "styled-components"
import { formatMoney } from "../../utils/formatMoney"
import { useContext, useEffect, useRef, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { useCartContext } from "../../hooks/useCartContext"

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
  margin: 0;
  max-width: 100vw;
  max-height: 100vh;
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

const BackdropStyled = styled.div`
  position: absolute;
  width: calc(100% - 440px);
  left: 0;
  top: 0;
  bottom: 0;
  @media screen and (max-width: 420px) {
    display: none;
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

// const CartDrawer = ({ 
//     products, 
//     cartDrawerStatus, 
//     cartTotalValue,
//     handleCartDisplay,
//     handleAddProduct,
//     handleRemoveProduct,
//     handleRemoveProductFromCart
//   }) => {
const CartDrawer = () => {

  const location = useLocation()
  const { cartProducts } = useContext(CartContext)
  const { 
    addProduct, 
    removeProduct, 
    removeProductFromCart,
    cartTotalValue,
    cartCount,
    cartDrawerStatus,
    setCartDrawerStatus,
    refCartDrawer,
    handleCartDisplay,
    openCartDrawer,
    closeCartDrawer
  } = useCartContext()

  // useEffect(() => {
  //   handleCartDisplay(false)
  // }, [pathname])

  return (
    <DialogStyled id="cartDrawer" ref={refCartDrawer}>
      <BackdropStyled
        onClick={() => closeCartDrawer()}
      />
      <DialogContainerStyled method="dialog">
        <CartHeaderStyled>
          <CartHeaderTitleStyled>Carrinho de Compras</CartHeaderTitleStyled>

          <CartCloseButtonStyled onClick={closeCartDrawer}>
            <IoMdClose size={26} color="#fff" />
          </CartCloseButtonStyled>
        </CartHeaderStyled>

        <WrapProductsStyled>
          {cartProducts.map(item => {
            return (
              <CartProduct
                key={item.id}
                product={item}
                handleAddProduct={addProduct}
                handleRemoveProduct={removeProduct}
                handleRemoveProductFromCart={removeProductFromCart}
              />
            )
          })}
        </WrapProductsStyled>

        <CartFooterStyled>
          <CartPriceWrapperStyled>
            <span>Total:</span>
            <span>{formatMoney(cartTotalValue)}</span>
          </CartPriceWrapperStyled>

          <Link 
            to="/carrinho" 
            onClick={() => closeCartDrawer()}
          >
            Finalizar compra
          </Link>
        </CartFooterStyled>
      </DialogContainerStyled>
    </DialogStyled>
  )
}

export default CartDrawer