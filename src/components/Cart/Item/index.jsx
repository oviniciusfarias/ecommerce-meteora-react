import { CiCircleMinus, CiCirclePlus } from "react-icons/ci"
import { IoMdTrash } from "react-icons/io"
import { formatMoney } from "../../../utils/formatMoney"
import styled from "styled-components"

const ProductWrapStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px 25px 32px 0px;
  border-bottom: 1px solid #ccc;
  position: relative;
`

const ProductImgStyled = styled.img`
  width: 20%;
  margin-right: 32px;
`

const ProductTitleStyled = styled.h3`
  color: #fff;
  font-size: 16px;
`

const ProductDescriptionStyled = styled.p`
  color: #fff;
  font-size: 13px;
`

const ProductPriceStyled = styled.p`
  color: #DAFF01;
  font-size: 16px;
  width: 30%;
  text-align: center;
`

const QuantityContainerStyled = styled.div`
  width: 30%;
  text-align: center;
  & > span {
    color: #fff;
    font-size: 13px;
    font-weight: 600;
  }
`

const QuantityActionsStyled = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  color: #fff;
  align-items: center;
  font-size: 13px;
  margin-top: 8px;
  & > button {
    background-color: transparent;
    color: #fff;
    padding: 0;
    cursor: pointer;
    border: none;
  }
`

const WrapDescriptionStyled = styled.div`
  width: 40%;
  
`

const ProductDetailsWrapStyled = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  gap: 16px;
  padding-right: 32px;
`
const ButtonRemoveWrapStyled = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 25px;
  & > button {
    background-color: transparent;
    padding: 0;
    display: block;
    color: #fff;
    border: none;
    cursor: pointer;
  }
`

const CartItem = ({ 
    product, 
    handleRemoveProduct, 
    handleAddProduct,
    handleRemoveProductFromCart
  }) => {
  return (
    <ProductWrapStyled>
      <ProductImgStyled src={product.src} />

      <ProductDetailsWrapStyled>
        <WrapDescriptionStyled>
          <ProductTitleStyled>
            {product.titulo}
          </ProductTitleStyled>
          <ProductDescriptionStyled>
            {product.descricao}
          </ProductDescriptionStyled>
        </WrapDescriptionStyled>
        
        <ProductPriceStyled>
          {formatMoney(product.preco)}
        </ProductPriceStyled>

        <QuantityContainerStyled>
          <span>Quantidade</span>
          <QuantityActionsStyled>
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
          </QuantityActionsStyled>
        </QuantityContainerStyled>
      </ProductDetailsWrapStyled>

      
      <ButtonRemoveWrapStyled>
        <button
          type="button"
          onClick={() => handleRemoveProductFromCart(product.id)}
        >
          <IoMdTrash size={20} />
        </button>
      </ButtonRemoveWrapStyled>
    </ProductWrapStyled>
  )
}

export default CartItem