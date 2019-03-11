import styled from 'styled-components'

const InnerStyled = styled.div`
  max-width: ${props => props.theme.size.inner};
  padding: 0 ${props => props.theme.size.gutter};
  width: 100%;
  margin: 0 auto;
  ${props => props.fullHeight && 'height: 100%;'};
`

export { InnerStyled }
