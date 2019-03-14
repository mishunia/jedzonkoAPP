import React, { Component } from 'react'

import { InnerStyled } from './../../styled/components/InnerStyled'
import { LayoutStyled } from './../../styled/components/LayoutStyled'
import styled from 'styled-components'
import base from './../../base'
import {
  ProductCartStyled,
  ProductCartContainerStyled,
  ProductCartWrapperStyled,
  ProductCartInnerStyled,
  ProductCartMediaStyled,
  ProductCartMediaPhotoStyled,
  ProductCartMediaNavStyled,
  ProductCartPhotoNavStyled,
  ProductCartPhotoNavItemStyled,
  ProductCartContentStyled,
  ProductCartContentHeadStyled,
  ProductCartContentPriceStyled,
  ProductCartContentDescStyled,
  ProductCartContentLabelsStyled,
  ProductCartContentOptionsStyled,
  ProductCartContentActionStyled
} from '../../styled/components/ProductCartStyled'
import { HeadingStyled } from '../../styled/components/HeadingStyled'
import { TextSecondaryStyled } from '../../styled/components/TextStyled'
import { LabelStyled } from '../../styled/components/Label'
import { ButtonStyledLarge } from '../../styled/components/Button'

export default class Product extends Component {
  render() {
    return (
      <LayoutStyled>
        <ProductCartInnerStyled>
          <ProductCartWrapperStyled>
            <ProductCartContainerStyled>
              <ProductCartStyled>
                <ProductCartMediaStyled>
                  <ProductCartMediaPhotoStyled>
                    <img src="https://www.freepngimg.com/thumb/burger/9-2-burger-png-hd.png" />
                  </ProductCartMediaPhotoStyled>
                  <ProductCartMediaNavStyled>
                    <ProductCartPhotoNavStyled>
                      <ProductCartPhotoNavItemStyled>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNCT9HPthwcyo3R-AxVGHvbAWp6oSfrnqQVhuzSpAX_FjYfYsB" />
                      </ProductCartPhotoNavItemStyled>
                      <ProductCartPhotoNavItemStyled>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNCT9HPthwcyo3R-AxVGHvbAWp6oSfrnqQVhuzSpAX_FjYfYsB" />
                      </ProductCartPhotoNavItemStyled>
                      <ProductCartPhotoNavItemStyled>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNCT9HPthwcyo3R-AxVGHvbAWp6oSfrnqQVhuzSpAX_FjYfYsB" />
                      </ProductCartPhotoNavItemStyled>
                    </ProductCartPhotoNavStyled>
                  </ProductCartMediaNavStyled>
                </ProductCartMediaStyled>
                <ProductCartContentStyled>
                  <ProductCartContentHeadStyled>
                    <HeadingStyled>PRODUCT NAME</HeadingStyled>
                  </ProductCartContentHeadStyled>
                  <ProductCartContentLabelsStyled>
                    <LabelStyled style={{ background: 'green' }}>
                      NEW
                    </LabelStyled>
                    <LabelStyled style={{ background: 'blue' }}>
                      PROMOTION
                    </LabelStyled>
                  </ProductCartContentLabelsStyled>
                  <ProductCartContentPriceStyled>
                    PRICE: 25 PLN
                  </ProductCartContentPriceStyled>
                  <ProductCartContentDescStyled>
                    <TextSecondaryStyled textColor={'gray'}>
                      Maecenas libero arcu, euismod non velit sit amet,
                      sollicitudin scelerisque augue. Phasellus at quam erat.
                      Orci varius natoque penatibus et magnis dis parturient
                      montes, nascetur ridiculus mus. Praesent feugiat mi in
                      orci placerat, quis egestas ligula bibendum. Nam tincidunt
                      rutrum elit, in tristique justo mattis nec.
                    </TextSecondaryStyled>
                  </ProductCartContentDescStyled>
                  <ProductCartContentActionStyled>
                    <ButtonStyledLarge>
                      <span>ADD TO CART</span>
                    </ButtonStyledLarge>
                  </ProductCartContentActionStyled>
                </ProductCartContentStyled>
              </ProductCartStyled>
            </ProductCartContainerStyled>
          </ProductCartWrapperStyled>
        </ProductCartInnerStyled>
      </LayoutStyled>
    )
  }
}
