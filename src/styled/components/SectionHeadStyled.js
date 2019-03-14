import styled from 'styled-components'

const SectionHeadStyled = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${props => props.theme.size.gutter} 0;
`

const SectionHeadSquareStyled = styled.div`
  width: 50px;
  height: 50px;
  background-color: ${props => props.theme.color.primary};
  margin-right: ${props => props.theme.size.gutter_2};
`

const SectionHeadTitleStyled = styled.div`
  color: black;
`

export { SectionHeadStyled, SectionHeadSquareStyled, SectionHeadTitleStyled }
