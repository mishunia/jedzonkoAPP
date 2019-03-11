import styled from 'styled-components'

const LabelStyled = styled.span`
  display: inline-block;
  background-color: ${props => props.theme.color.primary};
  color: ${props => props.theme.color.white};
  padding: ${props => props.theme.size.gutter_3};
  text-align: center;
  text-transform: uppercase;
  font-size: ${props => props.theme.fontsize.xs};
  margin-bottom: ${props => props.theme.size.gutter_3};
`

export { LabelStyled }
