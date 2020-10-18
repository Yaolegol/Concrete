import React from 'react';
import {hot} from 'react-hot-loader/root';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

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
                <div>root page</div>
            </Route>
        </Switch>
    </Router>;
}

export default hot(App);
