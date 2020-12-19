// @flow
import { actionGetUser } from "common/actions";
import { MainPage } from "pages/Main";
import CartPage from "pages/Cart";
import LogIn from "pages/LogIn";
import { ProfilePage } from "pages/Profile";
import ShopPage from "pages/Shop";
import SignUp from "pages/SignUp";
import { UserPage } from "pages/User/components";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { hot } from "react-hot-loader/root";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actionGetUser());
    }, [dispatch]);

    return (
        <Router>
            <Switch>
                <Route path="/cart">
                    <CartPage />
                </Route>
                <Route path="/login">
                    <LogIn />
                </Route>
                <Route path="/profile">
                    <ProfilePage />
                </Route>
                <Route path="/shop">
                    <ShopPage />
                </Route>
                <Route path="/signup">
                    <SignUp />
                </Route>
                <Route path="/user">
                    <UserPage />
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
