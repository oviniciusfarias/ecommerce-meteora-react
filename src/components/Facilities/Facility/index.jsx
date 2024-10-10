import styled from "styled-components"

const FacilityStyled = styled.div`
  display: flex;
  gap: 24px;
  max-width: 300px;
`

const FacilityImg = styled.img`
  display: block;
  width: 100%;
  max-width: 72px;
  max-height: 72px;
`

const FacilityTextStyled = styled.div`
  
`

const FacilityTitleStyled = styled.h3`
  color: #DAFF01;
  font-weight: 700;
  font-size: 16px;
  margin: 0 0 16px;
  text-transform: uppercase;
`

const FacilityDescriptionStyled = styled.p`
  font-size: 13px;
  font-weight: 400;
  margin: 0;
  color: #fff;
`

const Facility = ({ id, src, alt, titulo, descricao }) => {
  return (
    <FacilityStyled key={ id }>
      <FacilityImg src={ src } alt={ alt } />
      <FacilityTextStyled>
        <FacilityTitleStyled>{ titulo }</FacilityTitleStyled>
        <FacilityDescriptionStyled>{ descricao }</FacilityDescriptionStyled>
      </FacilityTextStyled>
    </FacilityStyled>
  )
}

export default Facility