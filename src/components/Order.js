import React, { Component } from 'react'
import { formatPrice } from '../helpers/Utils'
import styled from 'styled-components'
import FreeDelivery from './FreeDelivery'
import { HeadingSecondStyled } from '../styled/components/HeadingStyled'
import { TextSecondaryStyled } from '../styled/components/TextStyled'
import { ButtonCancelStyled } from '../styled/components/Button'
import {
  CartListStyled,
  CartListItemStyled,
  CartListItemMediaStyled,
  CartListItemContentStyled,
  CartListItemActionStyled,
  CartListItemContainerStyled,
  CartListItemContentItemStyled,
  CartListItemContentItemAltStyled
} from '../styled/components/CartListStyled'

const CartStyled = styled.div`
  position: fixed;
  right: 0;
  bottom: 0;
  background-color: ${props => props.theme.color.white};
  width: 400px;
  min-height: 200px;

  display: flex;
  flex-direction: column;
  border: 1px solid ${props => props.theme.color.primary};
`

const CartHeadingStyled = styled.div`
  border-bottom: 1px solid ${props => props.theme.color.primary};
  background-color: ${props => props.theme.color.primary};
  padding: ${props => props.theme.size.gutter_2};
`

const CartContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`

const CartContentStyled = styled.div`
  padding: ${props => props.theme.size.gutter_2};
`

const CartFooterStyled = styled.div`
  padding: ${props => props.theme.size.gutter_2};
  ${props => props.theme.size.gutter};
  border-top: 1px solid ${props => props.theme.color.primary};
`

const CartFooterItemStyled = styled.p`
  font-size: ${props => props.theme.fontsize.s};
  text-align: right;
`

const CartFooterItemAltStyled = styled(CartFooterItemStyled)`
  border-top: 1px dashed ${props => props.theme.color.black};
  margin-top: ${props => props.theme.size.gutter_2};
  padding-top: ${props => props.theme.size.gutter_2};
`
const ProgressBarStyled = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 5px;
  background-color: green;
`

const ProgressBarStateStyled = styled.div`
  background-color: red;
  height: 100%;
  transition: 1s ease;
`

export default class Order extends Component {
  renderCart = item => {
    const food = this.props.foods[item]
    const count = this.props.cart[item]
    const isAvailable = food && food.status === 'available'
    if (!food) return null
    if (!isAvailable) {
      return <li>Sorry {food ? food.name : 'food'} is no loger available</li>
    }
    return (
      <CartListStyled key={item}>
        <CartListItemStyled>
          <CartListItemMediaStyled>
            <img src={food.image} />
          </CartListItemMediaStyled>
          <CartListItemContainerStyled>
            <CartListItemContentStyled>
              <CartListItemContentItemStyled>
                <p>{food.name}</p>
                <p> x {count}</p>
              </CartListItemContentItemStyled>
              <CartListItemContentItemAltStyled>
                {formatPrice(count * food.price)}
              </CartListItemContentItemAltStyled>
            </CartListItemContentStyled>

            <CartListItemActionStyled>
              <ButtonCancelStyled
                onClick={() => this.props.removeFromCart(item)}
              >
                REMOVE
              </ButtonCancelStyled>
            </CartListItemActionStyled>
          </CartListItemContainerStyled>
        </CartListItemStyled>
      </CartListStyled>
    )
  }
  render() {
    const cartItems = Object.keys(this.props.cart)
    const deliveryPrice = 2000
    const freeDelivery = 20000
    const total = cartItems.reduce((prevTotal, key) => {
      const food = this.props.foods[key]
      const count = this.props.cart[key]
      const isAvalilable = food && food.status === 'available'
      if (isAvalilable) {
        return prevTotal + count * food.price
      }
      return prevTotal
    }, 0)
    const totalSum = total + deliveryPrice

    let diffTotalFree = freeDelivery - total

    console.log(total)
    console.log(formatPrice(freeDelivery))

    return cartItems.length ? (
      <CartStyled>
        <CartHeadingStyled>
          <HeadingSecondStyled>Your order:</HeadingSecondStyled>
        </CartHeadingStyled>
        <CartContainerStyled>
          <CartContentStyled>
            {cartItems.map(this.renderCart)}
          </CartContentStyled>
          <CartFooterStyled>
            <CartFooterItemStyled>
              Total <strong>{formatPrice(total)}</strong>
            </CartFooterItemStyled>
            <CartFooterItemStyled>
              <TextSecondaryStyled>
                Delivery:
                {total >= freeDelivery ? 'FREE!' : formatPrice(deliveryPrice)}
              </TextSecondaryStyled>
              <TextSecondaryStyled style={{ marginTop: '10px', color: 'red' }}>
                {/* Do darmowej przeyslki brakuje:
                {formatPrice(freeDelivery - total)} */}
                {diffTotalFree >= 0
                  ? `
                  You are missing for free shipping ${formatPrice(
                    diffTotalFree
                  )}`
                  : `FREE SHIPPING`}
              </TextSecondaryStyled>
              <FreeDelivery total={total} freeDelivery={freeDelivery} />
            </CartFooterItemStyled>
            <CartFooterItemAltStyled>
              Total sum:
              <strong>
                {total >= freeDelivery
                  ? formatPrice(total)
                  : formatPrice(totalSum)}
              </strong>
            </CartFooterItemAltStyled>
          </CartFooterStyled>
        </CartContainerStyled>
      </CartStyled>
    ) : null
  }
}
