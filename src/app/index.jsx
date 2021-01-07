// @flow
import { actionGetUser } from "modules/User/actions";
import React, { Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { hot } from "react-hot-loader/root";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const AdminPage = React.lazy(() => import("pages/Admin"));
const MainPage = React.lazy(() => import("pages/Main"));
const CartPage = React.lazy(() => import("pages/Cart"));
const LogIn = React.lazy(() => import("pages/LogIn"));
const ProfilePage = React.lazy(() => import("pages/Profile"));
const ShopPage = React.lazy(() => import("pages/Shop"));
const SignUp = React.lazy(() => import("pages/SignUp"));

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actionGetUser());
    }, [dispatch]);

    return (
        <Router>
            <Suspense fallback={<div />}>
                <Switch>
                    <Route path="/admin">
                        <AdminPage />
                    </Route>
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
                    <Route path="/">
                        <MainPage />
                    </Route>
                </Switch>
            </Suspense>
        </Router>
    );
};

// TODO remove hot from prod
export default (hot(App): any);
