import { BrowserRouter, Route, Routes } from "react-router-dom"
import PageHome from "./pages/Home"
import PageCart from "./pages/Cart"
import Page404 from "./pages/404"
import Header from "./components/Header"
import GlobalStyles from "./GlobalStyles"
import { useEffect, useState } from "react"
import CartProduct from "./components/CartDrawer/Product"
import ProductList from "./mocks/produtos.json"

function App() {

  const [cartDrawerStatus, setCartDrawerStatus] = useState(false)
  const [cartCount, setCartCount] = useState(0)
  const [cartProducts, setCartProducts] = useState([])
  const [cartTotalValue, setCartTotalValue] = useState(0)
  const [menuIsVisible, setMenuVisibility] = useState(false)

  const HandleMenuVisibility = (status) => {
    
    console.log('HandleMenuVisibility', status)

    if (status === true || status === false) {
      setMenuVisibility(status)
    } else {
      setMenuVisibility(!menuIsVisible)
    }
  }

  const HandleCartDrawerDisplay = (status) => {
    
    if (status === true || status === false) {
      setCartDrawerStatus(status)
    } else {
      setCartDrawerStatus(!cartDrawerStatus)
    }
  }

  const changeQuantity = (id, quantity) => {
    return cartProducts.map((cartItem) => {
      if (cartItem.id === id) {
        cartItem.quantity += quantity
      }
      return cartItem
    })
  }

  const addProduct = (newProduct) => {
    console.log('novo produto:', newProduct)
    
    const hasTheProduct = cartProducts.some((cartItem) => {
      console.log('cartItem.id:', cartItem.id, 'newProduct.id:', newProduct.id,  'verify new product: ', cartItem.id === newProduct.id)
      return cartItem.id === newProduct.id
    })
    
    console.log('já tem o produto:', hasTheProduct)

    if (!hasTheProduct) {
      newProduct.quantity = 1
      // setCartCount(cartCount + 1)
      setCartProducts([...cartProducts, newProduct])
    } else {
      setCartProducts(changeQuantity(newProduct.id, 1))
    }

    setTimeout(() => {
      console.log('todos os produtos do carrinho:', cartProducts)
    }, 100);

    setCartDrawerStatus(true)
  }

  const removeProduct = (id) => {
    const product = cartProducts.find((cartItem) => cartItem.id === id)
    const lastQuantity = product.quantity === 1

    if (lastQuantity) {
      // return setCartProducts((oldCart) => oldCart.filter((cartItem) => cartItem.id !== id))
      removeProductFromCart(id)
    } else {
      setCartProducts(changeQuantity(id, -1))
    }
    
  }

  const removeProductFromCart = (id) => {
    // setCartCount(cartCount - 1)
    setCartProducts(cartProducts.filter((cartItem) => cartItem.id !== id))
  }

  useEffect(() => {
    console.log('atualizando carrinho')

    const { cartQuantity, cartTotalValue } = cartProducts.reduce(
      ( accumulator, product ) => ({
        cartQuantity: accumulator.cartQuantity + product.quantity,
        cartTotalValue: accumulator.cartTotalValue + (product.preco * product.quantity)
      }), 
      {
        cartQuantity: 0,
        cartTotalValue: 0
      }
    )

    setCartCount(cartQuantity)
    setCartTotalValue(cartTotalValue)

  }, [cartProducts])



  return (
    <BrowserRouter>
      <GlobalStyles />

      <Header
        handleCartDisplay={HandleCartDrawerDisplay}
        menuVisible={menuIsVisible}
        cartCount={cartCount}
        handleMenuVisibility={HandleMenuVisibility}
      />

      <Routes>
        <Route
          path="/"
          element={
            <PageHome
              handleCartDisplay={HandleCartDrawerDisplay}
              cartDrawerStatus={cartDrawerStatus}
              cartProducts={cartProducts}
              cartTotalValue={cartTotalValue}
              handleAddProduct={addProduct}
              handleRemoveProduct={removeProduct}
              handleRemoveProductFromCart={removeProductFromCart}

            />
          }
        />
        <Route
          path="/carrinho"
          element={
            <PageCart
              cartProducts={cartProducts}
              cartTotalValue={cartTotalValue}
              cartCount={cartCount}
              handleAddProduct={addProduct}
              handleRemoveProduct={removeProduct}
              handleRemoveProductFromCart={removeProductFromCart}
            />
          }
        />
        <Route
          path="*"
          element={
            <Page404 />
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
