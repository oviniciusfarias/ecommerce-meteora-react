import styled from "styled-components"

const NewsletterSectionStyled = styled.section`
  margin: 64px auto;
  max-width: 620px;
  border: 2px solid #000;
  padding: 40px 16px;
  @media screen and (max-width: 420px) {
    max-width: 85vw;
  }
`

const NewsletterTitleStyled = styled.h2`
  text-align: center;
  font-size: 16px;
  font-weight: 400;
`

const NewsletterFormStyled = styled.form`
  display: flex;
  max-width: 450px;
  margin: 0 auto;
`

const NewsletterInputStyled = styled.input`
  flex-grow: 1;
  border-top: 1px solid #000;
  border-left: 1px solid #000;
  border-bottom: 1px solid #000;
  border-right: none;
  color: #6C757D;
  padding: 8px 16px;
  min-width: 0;
`

const NewsletterButtonStyled = styled.button`
  border: 1px solid #9353FF;
  color: #fff;
  background-color: #9353FF;
  text-align: center;
  padding: 10px 16px;
  &:hover {
    color: #9353FF;
    background-color: #fff;
    cursor: pointer;
  }

`

const Newsletter = () => {
  return (
    <NewsletterSectionStyled>
      <NewsletterTitleStyled>
        Quer receber nossas novidades, promoções exclusivas e 10% OFF na primeira compra? <strong>Cadastre-se</strong>
      </NewsletterTitleStyled>
      <NewsletterFormStyled>
        <NewsletterInputStyled type='text' placeholder="Digite seu email" />
        <NewsletterButtonStyled type="submit">
          Enviar
        </NewsletterButtonStyled>
      </NewsletterFormStyled>
    </NewsletterSectionStyled>
  )
}

export default Newsletter