import { useContext, useEffect, useMemo } from "react"
import { CartContext } from "../context/CartContext"
import { ADD_PRODUCT, REMOVE_PRODUCT, UPDATE_QUANTITY } from "../reducers/cartReducer"

const addProductAction = (newProduct) => ({
  type: ADD_PRODUCT,
  payload: newProduct
})

const removeProductAction = (productId) => ({
  type: REMOVE_PRODUCT,
  payload: productId
})

const updateQuantityAction = (productId, quantity) => ({
  type: UPDATE_QUANTITY,
  payload: { productId, quantity }
})

export const useCartContext = () => {
  const { 
    cartProducts,
    dispatchCart,
    cartTotalValue,
    cartCount,
    cartDrawerStatus,
    setCartDrawerStatus,
    refCartDrawer
  } = useContext(CartContext)

  const addProduct = (newProduct) => {

    dispatchCart(addProductAction(newProduct))

    openCartDrawer()
  }

  const removeProduct = (productId) => {
    const product = cartProducts.find((cartItem) => cartItem.id === productId)

    if (product && product.quantity > 1) {
      dispatchCart(updateQuantityAction(productId, product.quantity - 1))
    } else {
      dispatchCart(removeProductAction(productId))
    }
  }

  const removeProductFromCart = (productId) => {
    dispatchCart(removeProductAction(productId))
  }

  const handleCartDisplay = (open) => {
    if (open === true || open === false) {
      setCartDrawerStatus(open)
    } else {
      setCartDrawerStatus(!cartDrawerStatus)
    }
  }

  const openCartDrawer = () => {
    if (!!refCartDrawer.current) {
      refCartDrawer.current.showModal()
      document.body.style.overflow = 'hidden'
      setCartDrawerStatus(true)
    }
  }

  const closeCartDrawer = () => {
    if (!!refCartDrawer.current) {
      refCartDrawer.current.close();
      document.body.style.overflow = 'auto'
      setCartDrawerStatus(false)
    }
  }

  return {
    cartProducts,
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
  }
}
