import React, { Component } from 'react'

export default class ModifyMenu extends Component {
  handleChange = e => {
    console.log(e.currentTarget.name)
    const updatedFood = {
      ...this.props.food,
      [e.currentTarget.name]: e.currentTarget.value
    }
    this.props.modifyFood(this.props.index, updatedFood)
  }

  handleRemove = e => {
    this.props.removeFood(this.props.index)
  }
  render() {
    return (
      <div>
        <input
          name="name"
          type="text"
          onChange={this.handleChange}
          value={this.props.food.name}
        />
        <input
          name="image"
          type="text"
          onChange={this.handleChange}
          value={this.props.food.image}
        />
        <input
          name="price"
          type="text"
          onChange={this.handleChange}
          value={this.props.food.price}
        />
        <select
          name="status"
          onChange={this.handleChange}
          value={this.props.food.status}
        >
          <option onChange={this.handleChange} value="available">
            Fresh
          </option>
          <option onChange={this.handleChange} value="unavailable">
            Sold out
          </option>
        </select>
        <label>
          New
          <input
            type="checkbox"
            onChange={this.handleChange}
            value="new"
            name="label"
          />
        </label>
        <label>
          Bestseller
          <input
            type="checkbox"
            onChange={this.handleChange}
            value="bestseller"
            name="label"
          />
        </label>
        <label>
          Promo
          <input
            type="checkbox"
            onChange={this.handleChange}
            value="promo"
            name="label"
          />
        </label>

        <textarea
          name="desc"
          type="text"
          onChange={this.handleChange}
          value={this.props.food.desc}
        />
        <button onClick={this.handleRemove}>Remove Item</button>
      </div>
    )
  }
}
