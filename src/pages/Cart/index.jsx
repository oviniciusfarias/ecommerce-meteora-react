import { CiCircleMinus, CiCirclePlus } from "react-icons/ci"
import ContainerStyled from "../../components/Container"
import { IoMdTrash } from "react-icons/io"
import { formatMoney } from "../../utils/formatMoney"
import { Link } from "react-router-dom"
import styled from "styled-components"
import CartItem from "../../components/Cart/Item"
import CartTitle from "../../components/Cart/CartTitle"
import ResumeRow from "../../components/Cart/ResumeRow"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { useCartContext } from "../../hooks/useCartContext"

const PageWrapStyled = styled.main`
  & > div {
    @media screen and (max-width: 420px) {
      padding-left: 0;
      padding-right: 0;
    }
  }
`

const CartBannerWrapStyled = styled.div`
  width: 100%;
  height: 10vh;
  margin-bottom: 64px;
  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const PageTitleStyled = styled.h1`
  text-align: center;
  font-size: 32px;
  font-weight: 600;
`

const DetailsWrapStyled = styled.div`
  background-color: #000;
  width: 66.66%;
  @media screen and (max-width: 420px) {
    width: 100%;
  }
`

const ResumeWrapStyled = styled.div`
  width: 33.33%;
  @media screen and (max-width: 420px) {
    width: 100%;
  }
`

const ResumeContainerStyled = styled.div`
  background-color: #000;
  padding: 32px;
  display: flex;
  flex-direction: column;
  h2 { 
    padding: 0;
    margin-bottom: 32px;
  }
`

const ResumeActionsStyled = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  margin-top: 32px;
  @media screen and (max-width: 420px) {
    padding-left: 32px;
    padding-right: 32px;
    flex-direction: column;
  }
  & > a {
    border: 2px solid #9353FF;
    text-decoration: none;
    text-align: center;
    display: block;
    padding: 16px 8px;
    flex: 1;
  }
  & > a:first-child {
    color: #9353FF;
    background-color: #fff;
  }
  & > a:last-child {
    color: #fff;
    background-color: #9353FF;
  }
`

const WrapProductsStyled = styled.div`
  padding: 0 32px;
  & > div:first-child {
    padding-top: 0;
  }
`

const ColumnsWrapperStyled = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 32px;
  margin-bottom: 64px;
  @media screen and (max-width: 420px) {
    flex-direction: column;
  }
`

const WithoutProductsStyled = styled.div`
  & > p {
    color: #fff;
  }
`

// const PageCart = ({ 
//     cartProducts,
//     cartTotalValue,
//     cartCount,
//     handleRemoveProduct,
//     handleAddProduct,
//     handleRemoveProductFromCart
//   }) => {
const PageCart = () => {

  const { cartProducts } = useContext(CartContext)
  const {
    addProduct,
    removeProduct,
    removeProductFromCart,
    cartTotalValue,
    cartCount
  } = useCartContext()

  return (
    <>
      <Header />

      <PageWrapStyled>
        <CartBannerWrapStyled>
          <img src="/assets/images/banner-carrinho.png" alt="Carrinho de compras" />
        </CartBannerWrapStyled>

        <ContainerStyled>
          <PageTitleStyled>
            Carrinho de Compras
          </PageTitleStyled>
          
          <ColumnsWrapperStyled>
            <DetailsWrapStyled>
              <CartTitle>
                Detalhes da compra
              </CartTitle>

              <WrapProductsStyled>
                {cartProducts.length > 0 
                ?
                  cartProducts.map(cartItem => {
                    return (
                      <CartItem
                        key={ cartItem.id }
                        product={ cartItem }
                        handleRemoveProduct={ removeProduct }
                        handleAddProduct={ addProduct }
                        handleRemoveProductFromCart={ removeProductFromCart }
                      />
                    )
                  })
                :
                  <WithoutProductsStyled>
                    <p>
                      Não há produtos no carrinho
                    </p>
                  </WithoutProductsStyled>
                }
                
              </WrapProductsStyled>
            </DetailsWrapStyled>

            <ResumeWrapStyled>
              <ResumeContainerStyled>
                <CartTitle>
                  Sumário
                </CartTitle>
                
                <ResumeRow 
                  textLeft={`${cartCount} Produtos`}
                  textRight={formatMoney(cartTotalValue)}
                />
                
                {cartProducts.length > 0
                ?
                  <ResumeRow 
                    textLeft="Frete"
                    textRight="R$ 15"
                  />
                : ''
                }


                <ResumeRow 
                  textLeft="Total:"
                  textRight={ formatMoney(cartTotalValue) }
                  highlight={ true }
                />
              </ResumeContainerStyled>

              <ResumeActionsStyled>
                {cartProducts.length > 0
                ?
                  <>
                    <Link to="/">
                      Continuar compra
                    </Link>
                    <Link to="/carrinho">
                      Finalizar compra
                    </Link>
                  </>
                :
                  <Link to="/">
                    Adicionar produtos ao carrinho
                  </Link>
                }
              </ResumeActionsStyled>

            </ResumeWrapStyled>
          </ColumnsWrapperStyled>
        </ContainerStyled>

      </PageWrapStyled>
      
      <Footer />
    </>
  )
}

export default PageCart