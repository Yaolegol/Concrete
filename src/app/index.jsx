// @flow
import { MainPage } from 'pages/Main'
import CartPage from 'pages/Cart'
import ShopPage from 'pages/Shop'
import React from 'react'
import { hot } from 'react-hot-loader/root'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/shop">
                    <ShopPage />
                </Route>
                <Route path="/cart">
                    <CartPage />
                </Route>
                <Route path="/login">
                    <div>login</div>
                </Route>
                <Route path="/signup">
                    <div>signup</div>
                </Route>
                <Route path="/">
                    <MainPage/>
                </Route>
            </Switch>
        </Router>
    )
}

// TODO remove hot from prod
export default hot(App)
