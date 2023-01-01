// @flow
import { Layout } from "common/components/Layout";
import { actionGetUser } from "modules/User/actions";
import React, { Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { hot } from "react-hot-loader/root";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const AdminPage = React.lazy(() => import("main/Admin"));
const MainPage = React.lazy(() => import("main/Main"));
const CartPage = React.lazy(() => import("main/Cart"));
const LogIn = React.lazy(() => import("main/LogIn"));
const ProfilePage = React.lazy(() => import("main/Profile"));
const ShopPage = React.lazy(() => import("main/Shop"));
const SignUp = React.lazy(() => import("main/SignUp"));

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actionGetUser());
    }, [dispatch]);

    return (
        <Router>
            <Suspense fallback={<div />}>
                <Layout>
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
                </Layout>
            </Suspense>
        </Router>
    );
};

export default hot(App);
