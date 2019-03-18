import React, { Component } from 'react'
import styled from 'styled-components'
import filterItems from './../helpers/Filters'

const FilterContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const FilterContainerHeadStyled = styled.div`
  padding: ${props => props.theme.size.gutter_2};
  background-color: ${props => props.theme.color.primary};
  color: ${props => props.theme.color.white};
  font-size: ${props => props.theme.fontsize.m};
`

const FilterContainerContentStyled = styled.div`
  display: flex;

  border: 1px solid ${props => props.theme.color.primary};
  height: 100%;
  min-height: 20px;
  padding: ${props => props.theme.size.gutter_2};
`

const FilterElementStyled = styled.div`
  border: 1px solid ${props => props.theme.color.black};
  padding: ${props => props.theme.size.gutter_2};
  font-size: ${props => props.theme.fontsize.s};
  color: ${props => props.theme.color.black};
  margin-right: ${props => props.theme.size.gutter_2};
  transition: 0.3s ease;
  cursor: pointer;

  &:hover {
    background: ${props => props.theme.color.primary};
    color: ${props => props.theme.color.white};
  }
`

export default class Filters extends Component {
  state = {
    foods: [],
    filters: filterItems
  }

  handleFilter = () => {
    console.log(this)
  }

  render() {
    console.log(this.state.filters)
    return (
      <FilterContainerStyled>
        <FilterContainerHeadStyled>Filters</FilterContainerHeadStyled>
        <FilterContainerContentStyled>
          {this.state.filters.map(el => {
            return (
              <FilterElementStyled
                onClick={this.handleFilter}
                data-filter={el.key}
                key={el.id}
              >
                {el.name}
              </FilterElementStyled>
            )
          })}
        </FilterContainerContentStyled>
      </FilterContainerStyled>
    )
  }
}
