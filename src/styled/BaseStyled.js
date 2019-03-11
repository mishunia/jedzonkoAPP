import { createGlobalStyle } from 'styled-components'

const BaseStyled = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i|Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&subset=latin-ext');

  body {
    /* padding-top: ${props => props.theme.size.header}; */
    margin: 0;
    font-family: 'Roboto', sans-serif;
    font-size: 15px;
    line-height: 1.2;
    font-weight: 400;
    /* color: ${props => props.theme.color.default}; */
  }

  * {
    box-sizing: border-box;
  }

  h1,h2,h3,p {
    margin: 0;
  }
`

export default BaseStyled
