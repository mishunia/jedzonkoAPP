import React, { Component } from 'react'
import styled from 'styled-components'

const AddFoodFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${props => props.theme.color.white};
  padding: ${props => props.theme.size.gutter};
`

export default class AddFood extends Component {
  nameRef = React.createRef()
  priceRef = React.createRef()
  statusRef = React.createRef()
  descRef = React.createRef()
  imageRef = React.createRef()

  addFood = e => {
    e.preventDefault()

    const { label } = this.form
    const checkboxArray = Array.prototype.slice.call(label)
    const checkedCheckboxes = checkboxArray.filter(input => input.checked)
    const checkedCheckedboxesValues = checkedCheckboxes.map(
      input => input.value
    )
    console.log('checkec array values:', checkedCheckedboxesValues)
    const food = {
      name: this.nameRef.current.value,
      price: parseFloat(this.priceRef.current.value),
      status: this.statusRef.current.value,
      desc: this.descRef.current.value,
      image: this.imageRef.current.value,
      label: checkedCheckedboxesValues
    }
    this.props.addFood(food)
  }

  render() {
    return (
      <AddFoodFormStyled
        onSubmit={this.addFood}
        ref={form => (this.form = form)}
      >
        <input
          name="name"
          ref={this.nameRef}
          type="text"
          placeholder="Food name"
        />
        <input
          name="image"
          ref={this.imageRef}
          type="text"
          placeholder="Food image"
        />
        <input
          name="price"
          ref={this.priceRef}
          type="text"
          placeholder="Food price"
        />
        <select name="status" ref={this.statusRef}>
          <option value="available">Fresh</option>
          <option value="unavailable">Sold out</option>
        </select>
        <label>
          New
          <input type="checkbox" value="new" name="label" />
        </label>
        <label>
          Bestseller
          <input type="checkbox" value="bestseller" name="label" />
        </label>
        <label>
          Promo
          <input type="checkbox" value="promo" name="label" />
        </label>

        <textarea
          name="desc"
          ref={this.descRef}
          type="text"
          placeholder="Food desc"
        />
        <button type="submit">Add food</button>
      </AddFoodFormStyled>
    )
  }
}
