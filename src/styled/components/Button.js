import styled from 'styled-components'

const ButtonStyled = styled.button`
  width: 100%;
  background-color: ${props => props.theme.color.primary};
  color: ${props => props.theme.color.white};
  padding: ${props => props.theme.size.gutter_2} 0;
  text-align: center;
  text-transform: uppercase;
  transition: 0.3s ease;
  border: none;
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.color.secondary};
  }

  &:disabled {
    background-color: ${props => props.theme.color.gray};
    cursor: default;
  }
`

const ButtonStyledLarge = styled(ButtonStyled)`
  font-size: ${props => props.theme.fontsize.l};
  transform: skew(-21deg);
  padding: 20px 40px;

  span {
    display: block;
    transform: skew(21deg);
    transition: 0.3s ease;
  }
  &:hover {
    transform: skew(0deg);
    background-color: ${props => props.theme.color.primary};
  }
  &:hover span {
    transform: skew(0deg);
  }
`

const ButtonCancelStyled = styled(ButtonStyled)`
  background-color: ${props => props.theme.color.red};
  padding: ${props => props.theme.size.gutter_3};

  &:hover {
    background-color: ${props => props.theme.color.red_dark};
  }
`

export { ButtonStyled, ButtonStyledLarge, ButtonCancelStyled }
