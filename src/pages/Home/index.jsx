import BannerSlider from "../../components/BannerSlider"
import Categories from "../../components/Categories"
import Products from "../../components/Products"
import Facilities from "../../components/Facilities"
import Footer from "../../components/Footer"
import Newsletter from "../../components/Newsletter"
import CartDrawer from "../../components/CartDrawer"

const PageHome = ({ 
    cartProducts, 
    cartCount, 
    cartDrawerStatus, 
    handleCartDisplay, 
    handleAddProduct,
    handleRemoveProduct,
    handleRemoveProductFromCart,
    cartTotalValue
  }) => {
  return (
    <>
      <CartDrawer 
        products={cartProducts}
        cartDrawerStatus={cartDrawerStatus}
        cartTotalValue={cartTotalValue}
        handleCartDisplay={handleCartDisplay}
        handleAddProduct={handleAddProduct}
        handleRemoveProduct={handleRemoveProduct}
        handleRemoveProductFromCart={handleRemoveProductFromCart}
      />
      
      <main>
        <BannerSlider />

        <Categories />

        <Products 
          handleAddProduct={handleAddProduct}
        />

        <Facilities />

        <Newsletter />
      </main>

      <Footer />
    </>
  )
}

export default PageHome