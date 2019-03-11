import React, { Component } from 'react'
import styled from 'styled-components'

const FoodListWrapperStyled = styled.div`
  width: 100%;
  border: 1px solid pink;
  height: 200px;
`

export default class FoodList extends Component {
  render() {
    return <FoodListWrapperStyled>FOODLISTA</FoodListWrapperStyled>
  }
}
