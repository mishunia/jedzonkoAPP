import React, { Component } from 'react'
import Header from './Header'
import FoodList from './FoodList'
import Inventory from './Inventory'
import Order from './Order'
import MenuItem from './MenuItem'
//import Test from './HomeSlider'
import sampleFood from './../helpers/SampleFood'
import { ThemeProvider } from 'styled-components'
import BaseStyled from './../styled/BaseStyled'
import { theme } from './../styled/ThemeStyled'
import { InnerStyled } from './../styled/components/InnerStyled'
import { LayoutStyled } from './../styled/components/LayoutStyled'
import styled from 'styled-components'
import base from '../base'
import {
  SectionHeadStyled,
  SectionHeadSquareStyled,
  SectionHeadTitleStyled
} from '../styled/components/SectionHeadStyled'

import { HeadingThirdStyled } from '../styled/components/HeadingStyled'

const MenuListStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -25px;
  list-style-type: none;
  padding: 0;
`

export default class App extends Component {
  state = {
    foods: {},
    cart: {}
  }

  componentDidMount() {
    const localStorageRef = localStorage.getItem('localCart')
    if (localStorageRef) {
      this.setState({
        cart: JSON.parse(localStorageRef)
      })
    }
    this.ref = base.syncState('/foods', {
      context: this,
      state: 'foods'
    })
  }

  componentDidUpdate() {
    localStorage.setItem('localCart', JSON.stringify(this.state.cart))
  }

  addFood = food => {
    console.log('elo')
    const newFoods = { ...this.state.foods }
    newFoods[`food${Date.now()}`] = food
    this.setState({
      foods: newFoods
    })
    console.log(this.state.foods)
  }

  modifyFood = (key, updatedFood) => {
    const foods = { ...this.state.foods }
    foods[key] = updatedFood
    this.setState({
      foods: foods
    })
  }

  removeFood = key => {
    const foods = { ...this.state.foods }
    foods[key] = null
    this.setState({
      foods
    })
  }

  sampleFood = food => {
    this.setState({
      foods: sampleFood
    })
  }

  addToCart = food => {
    const newCart = { ...this.state.cart }
    newCart[food] = newCart[food] + 1 || 1
    this.setState({
      cart: newCart
    })
  }

  removeFromCart = key => {
    const cart = { ...this.state.cart }
    delete cart[key]
    this.setState({
      cart
    })
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <BaseStyled />
          {/* <Header tagline="jedzonko APP" /> */}
          <InnerStyled>
            <LayoutStyled>
              {/* <FoodList /> */}
              <SectionHeadStyled>
                <SectionHeadSquareStyled />
                <SectionHeadTitleStyled>
                  <HeadingThirdStyled>Inventory</HeadingThirdStyled>
                </SectionHeadTitleStyled>
              </SectionHeadStyled>
              <div>
                <MenuListStyled>
                  {Object.keys(this.state.foods).map(food => (
                    <MenuItem
                      index={food}
                      key={food}
                      details={this.state.foods[food]}
                      addToCart={this.addToCart}
                      match={this.props.match}
                    />
                  ))}
                </MenuListStyled>
              </div>
              <Order
                foods={this.state.foods}
                cart={this.state.cart}
                removeFromCart={this.props.removeFromCart}
              />
              <Inventory
                foods={this.state.foods}
                addFood={this.addFood}
                sampleFood={this.sampleFood}
                modifyFood={this.modifyFood}
              />
            </LayoutStyled>
          </InnerStyled>
        </React.Fragment>
      </ThemeProvider>
    )
  }
}
