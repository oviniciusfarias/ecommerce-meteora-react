import BannerSlider from "../../components/BannerSlider"
import Categories from "../../components/Categories"
import Products from "../../components/Products"
import Facilities from "../../components/Facilities"
import Footer from "../../components/Footer"
import Newsletter from "../../components/Newsletter"
import CartDrawer from "../../components/CartDrawer"
import Header from "../../components/Header"

// const PageHome = ({ 
//     cartProducts, 
//     cartCount, 
//     cartDrawerStatus, 
//     handleCartDisplay, 
//     handleAddProduct,
//     handleRemoveProduct,
//     handleRemoveProductFromCart,
//     cartTotalValue
//   }) => {
const PageHome = () => {
  return (
    <>
      <Header />

      {/* <CartDrawer 
        products={cartProducts}
        cartDrawerStatus={cartDrawerStatus}
        cartTotalValue={cartTotalValue}
        handleCartDisplay={handleCartDisplay}
        handleAddProduct={handleAddProduct}
        handleRemoveProduct={handleRemoveProduct}
        handleRemoveProductFromCart={handleRemoveProductFromCart}
      /> */}
      <CartDrawer />
      
      <main>
        <BannerSlider />

        <Categories />

        {/* <Products 
          handleAddProduct={handleAddProduct}
        /> */}
        <Products />

        <Facilities />

        <Newsletter />
      </main>

      <Footer />
    </>
  )
}

export default PageHome