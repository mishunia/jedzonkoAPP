import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import StorePicker from './StorePicker'
import App from './App'
import Product from '../components/Product/Product'
import NotFoundPage from './NotFoundPage'

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={StorePicker} />
      <Route path="/shop" component={App} />
      <Route path="/pozdro/:productId" component={Product} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
)

export default Router
