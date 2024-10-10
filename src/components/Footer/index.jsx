import styled from "styled-components"

const FooterStyled = styled.footer`
  text-align: center;
  background-color: #000;
  padding: 16px;
`

const FooterTextStyled = styled.p`
  color: #fff;
  margin: 0;
  font-size: 13px;
`

const Footer = () => {
  return (
    <FooterStyled>
      <FooterTextStyled>
        2024 © Desenvolvido por Vinicius Farias | Projeto fictício sem fins comerciais (apenas estudos).
      </FooterTextStyled>
    </FooterStyled>
  )
}

export default Footer