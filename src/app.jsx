// @flow
import { MainPage } from 'pages/main'
import React from 'react'
import { hot } from 'react-hot-loader/root'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const App = () => {
    return <Router>
        <Switch>
            <Route path="/about">
                <div>about</div>
            </Route>
            <Route path="/users">
                <div>users</div>
            </Route>
            <Route path="/">
                <MainPage />
            </Route>
        </Switch>
    </Router>
}

export default hot(App)
