import React, { Component } from 'react'
import AddFood from './AddFood'
import ModifyMenu from './ModifyMenu'

export default class Inventory extends Component {
  componentDidMount() {
    console.log(this.props.foods)
  }
  render() {
    return (
      <div>
        <h2>Inventorek</h2>
        <AddFood addFood={this.props.addFood} />
        <button onClick={this.props.sampleFood}>Load Sample Foods</button>
        <h2>Modify menu</h2>
        {Object.keys(this.props.foods).map(item => (
          <ModifyMenu
            index={item}
            key={item}
            food={this.props.foods[item]}
            modifyFood={this.props.modifyFood}
            removeFood={this.props.removeFood}
          />
        ))}
      </div>
    )
  }
}
