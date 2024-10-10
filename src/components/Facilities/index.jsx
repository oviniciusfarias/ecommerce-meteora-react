
import styled from 'styled-components'
import SectionTitleStyled from '../SectionTitle'
import ContainerStyled from '../Container'

import FacilitiesList from '../../mocks/facilidades.json'
import Facility from './Facility'

const SectionStyled = styled.section`
  background-color: #000;
  padding: 40px;
  & > div > h2 {
    color: #fff;
  }
  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

const WrapperFacilitiesStyled = styled.div`
  display: flex;
  max-width: 976px;
  gap: 32px;
`

const Facilities = () => {
  return (
    <SectionStyled>
      <ContainerStyled>
        <SectionTitleStyled>
          Conheça todas as nossas facilidades
        </SectionTitleStyled>

        <WrapperFacilitiesStyled>
          {FacilitiesList.map(facility => {
            return (
              <Facility 
                key={ facility.id }
                {...facility}
              />
            )
          })}
        </WrapperFacilitiesStyled>

      </ContainerStyled>
    </SectionStyled>
  )
}

export default Facilities