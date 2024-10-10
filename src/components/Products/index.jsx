import ContainerStyled from "../Container"
import SectionTitleStyled from "../SectionTitle"

import ProductsList from '../../mocks/produtos.json'
import Product from "./Product"
import styled from "styled-components"

const SectionProductsStyled = styled.section`
  margin-bottom: 84px;
`

const ProductsWrapperStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  & > div { 
    width: calc(33.33% - 20px);
    @media screen and (max-width: 420px) {
      width: calc(100%);
    }
  }
`

const Products = ({ handleAddProduct }) => {
  return (
    <SectionProductsStyled>
      <ContainerStyled>
        <SectionTitleStyled>Produtos que estão bombando!</SectionTitleStyled>

        <ProductsWrapperStyled>
          {ProductsList.map(product => {
            return (
              <Product 
                handleAddProduct={handleAddProduct}
                key={product.id}
                product={product}
              />
            )
          })}
        </ProductsWrapperStyled>
      </ContainerStyled>
    </SectionProductsStyled>
  )
  
}

export default Products