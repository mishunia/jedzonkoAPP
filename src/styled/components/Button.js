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
const ButtonCancelStyled = styled(ButtonStyled)`
  background-color: ${props => props.theme.color.red};
  padding: ${props => props.theme.size.gutter_3};

  &:hover {
    background-color: ${props => props.theme.color.red_dark};
  }
`

export { ButtonStyled, ButtonCancelStyled }
