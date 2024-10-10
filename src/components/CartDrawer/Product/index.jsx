import { CiCircleMinus, CiCirclePlus } from "react-icons/ci"
import { IoMdTrash } from "react-icons/io"
import styled from "styled-components"
import { formatMoney } from "../../../utils/formatMoney"

const WrapProductStyled = styled.div`
  padding: 16px 0;
  border-bottom: 1px solid rgba(255,255,255,0.3);
  display: flex;
`

const ProductImgStyled = styled.img`
  max-width: 110px;
  display: block;
  margin-right: 16px;
`
const ProductContentWrapStyled = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

const ProductNameStyled = styled.p`
  color: #fff;
`

const ProductPriceStyled = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: #DAFF01;
`

const ProductActionsStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > div {
    display: flex;
    align-items: center;
    flex-grow: 1;
  }
  & > div > span {
    padding: 0 4px;
    text-align: center;
    margin: 0;
  }
  span {
    font-size: 12px;
    color: #fff;
    margin-right: 8px;
  }
  button {
    border: none;
    background-color: transparent;
    color: #fff;
    margin: 0;
    cursor: pointer;
    &:hover {
      color: #9353FF;
    }
  }
`

const CartProduct = ({ 
    product, 
    handleRemoveProduct, 
    handleAddProduct,
    handleRemoveProductFromCart 
  }) => {
  return (
    <WrapProductStyled>
      <ProductImgStyled src={product.src} />

      <ProductContentWrapStyled>
        <ProductNameStyled>{ product.titulo }</ProductNameStyled>

        <ProductActionsStyled>
          <span>Quantidade</span>

          <div>
            <button 
              type="button"
              onClick={() => handleRemoveProduct(product.id)}
            >
              <CiCircleMinus size={26} />
            </button>
            <span>{product.quantity}</span>
            <button
              type="button"
              onClick={() => handleAddProduct(product)}
            >
              <CiCirclePlus size={26} />
            </button>
          </div>

          <button
            type="button"
            onClick={() => handleRemoveProductFromCart(product.id)}
          >
            <IoMdTrash size={20} />
          </button>
        </ProductActionsStyled>

        <ProductPriceStyled>
          {formatMoney(product.preco)}
        </ProductPriceStyled>
      </ProductContentWrapStyled>
    </WrapProductStyled>
  )
}

export default CartProduct