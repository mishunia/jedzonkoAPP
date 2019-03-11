import React, { Component } from 'react'
import styled from 'styled-components'
import { InnerStyled } from './../styled/components/InnerStyled'
import { HeadingStyled } from './../styled/components/HeadingStyled'

const HeaderStyled = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: ${props => props.theme.size.gutter} 0;
  display: flex;
  align-items: center;
  z-index: 100;
  background-color: ${props => props.theme.color.primary};
`

const HeaderContentStyled = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`

const Header = ({ tagline }) => {
  return (
    <HeaderStyled>
      <InnerStyled>
        <HeaderContentStyled>
          <HeadingStyled primary>{tagline}</HeadingStyled>
        </HeaderContentStyled>
      </InnerStyled>
    </HeaderStyled>
  )
}

export default Header
