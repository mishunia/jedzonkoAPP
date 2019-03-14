import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './Header'
import { ThemeProvider } from 'styled-components'
import BaseStyled from '../styled/BaseStyled'
import { theme } from '../styled/ThemeStyled'
import StorePicker from './StorePicker'
import App from './App'
import Product from '../components/Product/Product'
import NotFoundPage from './NotFoundPage'

const Router = () => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <BaseStyled />
        <Header tagline="jedzonko APP" />
        <Switch>
          <Route exact path="/" component={StorePicker} />
          <Route path="/shop" component={App} />
          <Route
            path="/pozdro/:productId"
            render={routeProps => (
              <Product {...routeProps} currentStep={'lol'} />
            )}
          />
          <Route component={NotFoundPage} />
        </Switch>
      </React.Fragment>
    </ThemeProvider>
  </BrowserRouter>
)

export default Router
