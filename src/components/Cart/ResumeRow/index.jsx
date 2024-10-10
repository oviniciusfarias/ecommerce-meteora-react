import styled from "styled-components"

const ResumeRowStyled = styled.div`
  display: flex;
  margin: 8px 0;
  padding: ${props => props.$highlight ? "24px 0" : "8px 0"};
  border-top: ${props => props.$highlight ? "1px solid #DAFF01" : "none"};
  & > span:first-child {
    flex-grow: 1;
  }
  & > span {
    font-size: ${props => props.$highlight ? "24px" : "16px"};
    color: ${props => props.$highlight ? "#DAFF01" : "white"};
  }
`

const ResumeRow = ({ textLeft, textRight, highlight }) => {
  return (
    <ResumeRowStyled $highlight={highlight}>
      <span>
        {textLeft}
      </span>
      <span>
        {textRight}
      </span>
    </ResumeRowStyled>
  )
}

export default ResumeRow