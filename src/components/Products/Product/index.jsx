import styled from "styled-components"
import { formatMoney } from "../../../utils/formatMoney"

const ProductStyled = styled.div`
  border: 1px solid rgba(0,0,0, 0.13);
  max-width: 350px;
`

const ProductFigureStyled = styled.figure`
  margin: 0;
`
const ProductImgStyled = styled.img`
  width: 100%;
  max-width: 100%;
  display: block;
`

const ProductFigcaptionStyled = styled.figcaption`
  padding: 16px 16px 10px;
  display: flex;
  flex-direction: column;
  gap: 14px;
`

const ProductNameStyled = styled.h3`
  font-weight: 700;
  font-size: 16px;
  margin: 0;
`

const ProductDescriptionStyled = styled.p`
  margin: 0;
  font-size: 13px;
  font-weight: 400;
`

const ProductPriceStyled = styled.h4`
  margin: 0;
  font-weight: 700;
  font-size: 16px;
`

const ProductAddButtonStyled = styled.button`
  margin: 0px 16px 16px;
  text-align: center;
  font-weight: 600;
  color: #fff;
  background-color: #9353FF;
  padding: 12px 16px;
  border: 1px solid #9353FF;
  cursor: pointer;
  &:hover {
    color: #9353FF;
    background-color: #fff;
  }
`

const Product = ({ product, handleAddProduct }) => {
  return (
    <ProductStyled>
      <ProductFigureStyled>
        <ProductImgStyled src={ product.src } alt={ product.alt } />
        <ProductFigcaptionStyled>
          <ProductNameStyled>{ product.titulo }</ProductNameStyled>
          <ProductDescriptionStyled>
            { product.descricao }
          </ProductDescriptionStyled>

          <ProductPriceStyled>{ formatMoney(product.preco) }</ProductPriceStyled>
        </ProductFigcaptionStyled>
      </ProductFigureStyled>

      <ProductAddButtonStyled onClick={() => handleAddProduct(product)}>
        Adicionar ao carrinho
      </ProductAddButtonStyled>
    </ProductStyled>
  )
}

export default Product