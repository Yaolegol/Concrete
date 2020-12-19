// @flow
import { MainPage } from "pages/Main";
import CartPage from "pages/Cart";
import LogIn from "pages/LogIn";
import ShopPage from "pages/Shop";
import SignUp from "pages/SignUp";
import { UserPage } from "pages/User/components";
import React from "react";
import { useDispatch } from "react-redux";
import { hot } from "react-hot-loader/root";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
    const dispatch = useDispatch();

    

    return (
        <Router>
            <Switch>
                <Route path="/shop">
                    <ShopPage />
                </Route>
                <Route path="/user">
                    <UserPage />
                </Route>
                <Route path="/cart">
                    <CartPage />
                </Route>
                <Route path="/login">
                    <LogIn />
                </Route>
                <Route path="/signup">
                    <SignUp />
                </Route>
                <Route path="/">
                    <MainPage />
                </Route>
            </Switch>
        </Router>
    );
};

// TODO remove hot from prod
export default hot(App);
