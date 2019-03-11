import styled from 'styled-components'

const HeadingStyled = styled.h1`
  font-size: ${props => props.theme.fontsize.xl};
  color: ${props =>
    props.primary ? props.theme.color.white : props.theme.color.primary};
  font-weight: ${props => props.theme.weight.bold};
`

const HeadingSecondStyled = styled.h2`
  font-size: ${props => props.theme.fontsize.m};
  color: ${props => props.theme.color.white};
  font-weight: ${props => props.theme.weight.regular};
`

export { HeadingStyled, HeadingSecondStyled }
