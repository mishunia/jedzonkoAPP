import React, { Component } from 'react'
import styled from 'styled-components'
import {
  MenuItemStyled,
  MenuItemMediaStyled,
  MenuItemTitleStyled,
  MenuItemDescStyled,
  MenuItemLabelsStyled,
  MenuItemDateStyled,
  MenuItemPriceStyled,
  MenuItemMediaPhotoStyled,
  MenuItemActionStyled,
  MenuItemLabelsContainerStyled
} from '../styled/components/MenuItemStyled'
import { ButtonStyled } from '../styled/components/Button'
import { LabelStyled } from '../styled/components/Label'
import {
  TextPrimaryStyled,
  TextSecondaryStyled
} from '../styled/components/TextStyled'
import { formatPrice } from '../helpers/Utils'

const MenuListItemStyled = styled.li`
  width: 20%;
  margin: 0 25px 25px;
  border: 1px solid #000;
  padding: 10px;
`

class menuItem extends Component {
  handleAddToCart = () => {
    this.props.addToCart(this.props.index)
  }

  render() {
    const { image, name, price, desc, status, label } = this.props.details
    const isAvailable = status === 'available'
    return (
      <MenuListItemStyled>
        <MenuItemStyled>
          <MenuItemMediaStyled>
            <MenuItemMediaPhotoStyled
              style={{ backgroundImage: `url(${image})` }}
            />
            <MenuItemLabelsContainerStyled>
              {label
                ? label.map((item, _id) => {
                    return <LabelStyled key={_id}>{item}</LabelStyled>
                  })
                : ''}
            </MenuItemLabelsContainerStyled>
          </MenuItemMediaStyled>

          <MenuItemDateStyled>🔥 </MenuItemDateStyled>

          <MenuItemTitleStyled>
            <TextPrimaryStyled>{name}</TextPrimaryStyled>
          </MenuItemTitleStyled>

          <MenuItemDescStyled>
            <TextSecondaryStyled textColor={'gray'}>{desc}</TextSecondaryStyled>
          </MenuItemDescStyled>

          <MenuItemLabelsStyled>{status}</MenuItemLabelsStyled>
          <MenuItemPriceStyled>Price: {formatPrice(price)}</MenuItemPriceStyled>

          <MenuItemActionStyled>
            <ButtonStyled
              disabled={!isAvailable}
              onClick={this.handleAddToCart}
            >
              {isAvailable ? 'Add to cart 🔥' : 'Sold out'}
            </ButtonStyled>
          </MenuItemActionStyled>
        </MenuItemStyled>
      </MenuListItemStyled>
    )
  }
}

export default menuItem
