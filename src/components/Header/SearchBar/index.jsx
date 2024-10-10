import styled from "styled-components"

const FormStyled = styled.form`
  display: flex;
  gap: 8px;
`

const ButtonStyled = styled.button`
  background-color: #000;
  color: white;
  text-align: center;
  border: 1px solid white;
  padding: 12px;
  cursor: pointer;
  &:hover {
    border-color: #9353FF;
    background-color: #9353FF;
  }
`

const InputStyled = styled.input`
  background-color: white;
  color: #6C757D;
  border: 1px solid #CED4DA;
  padding: 0px 14px;
  max-width: 170px;
  font-size: 14px;
`

const SearchBar = () => {
  return (
    <FormStyled>
      <InputStyled placeholder="Digite o produto" />
      <ButtonStyled>Buscar</ButtonStyled>
    </FormStyled>
  )
}

export default SearchBar