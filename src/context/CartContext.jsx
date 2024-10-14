import { createContext, useEffect, useMemo, useReducer, useRef, useState } from "react";
import { cartReducer } from "../reducers/cartReducer";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

  // const [cartProducts, setCartProducts] = useState([])
  const [cartProducts, dispatchCart] = useReducer(cartReducer, [])
  const [cartTotalValue, setCartTotalValue] = useState(0)
  const [cartCount, setCartCount] = useState(0)
  const [cartDrawerStatus, setCartDrawerStatus] = useState(false)
  const refCartDrawer = useRef(null)

  const { quantityTemp, totalTemp } = useMemo(() => {
    return cartProducts.reduce(
      (accumulator, product) => {
        return {
          quantityTemp: accumulator.quantityTemp + product.quantity,
          totalTemp: accumulator.totalTemp + (product.preco * product.quantity)
        }
      },
      {
        quantityTemp: 0,
        totalTemp: 0
      }
    )
  }, [cartProducts])

  useEffect(() => {
    setCartCount(quantityTemp)
    setCartTotalValue(totalTemp)
  })

  return (
    <CartContext.Provider value={{
      cartProducts,
      dispatchCart,
      cartTotalValue,
      cartCount,
      cartDrawerStatus,
      setCartDrawerStatus,
      refCartDrawer
    }}>
      {children}
    </CartContext.Provider>
  )
}