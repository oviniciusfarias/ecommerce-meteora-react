
import styled from 'styled-components'
import CategoriesList from '../../mocks/categorias.json'
import ContainerStyled from '../Container'
import SectionTitleStyled from '../SectionTitle'

const SectionCategoriesStyled = styled.section`
  margin-bottom: 48px;
`

const CategoriesWrapperStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`

const CategoryItemStyled = styled.figure`
  display: flex;
  flex-direction: column;
  margin: 0;
`

const CategoryItemTitleStyled = styled.h3`
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  padding: 8px 6px;
  background-color: #000;
  color: #fff;
  margin: 0;
`

const Categories = () => {
  return (
    <SectionCategoriesStyled>
      <ContainerStyled>
        <SectionTitleStyled>Busque por categoria:</SectionTitleStyled>

        <CategoriesWrapperStyled>
          {CategoriesList.map(category => {
            return (
              <CategoryItemStyled key={category.id}>
                <img src={category.src} alt={category.alt} />

                <figcaption>
                  <CategoryItemTitleStyled>{category.descricao}</CategoryItemTitleStyled>
                </figcaption>
              </CategoryItemStyled>
            )
          })}
        </CategoriesWrapperStyled>
      </ContainerStyled>
    </SectionCategoriesStyled>
  )
}

export default Categories