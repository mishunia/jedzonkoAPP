import styled from 'styled-components'

const TextPrimaryStyled = styled.p`
  font-size: ${props => props.theme.fontsize.s};
  font-weight: ${props => props.theme.weight.regular};

  color: ${props => props.textColor || props.theme.color.black};
`

const TextSecondaryStyled = styled(TextPrimaryStyled)`
  font-size: ${props => props.theme.fontsize.xs};
`

export { TextPrimaryStyled, TextSecondaryStyled }
