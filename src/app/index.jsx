// @flow
import { Layout } from "common/components/Layout";
import { MainHero } from "main/Home/Hero";
import { actionGetUser } from "modules/User/actions";
import React, { Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { hot } from "react-hot-loader/root";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "styles/index.less";

const AdminPage = React.lazy(() => import("main/Admin"));
const MainPage = React.lazy(() => import("main/Home"));
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
                <Switch>
                    <Route path="/admin">
                        <Layout>
                            <AdminPage />
                        </Layout>
                    </Route>
                    <Route path="/cart">
                        <Layout>
                            <CartPage />
                        </Layout>
                    </Route>
                    <Route path="/login">
                        <Layout>
                            <LogIn />
                        </Layout>
                    </Route>
                    <Route path="/profile">
                        <Layout>
                            <ProfilePage />
                        </Layout>
                    </Route>
                    <Route path="/shop">
                        <Layout>
                            <ShopPage />
                        </Layout>
                    </Route>
                    <Route path="/signup">
                        <Layout>
                            <SignUp />
                        </Layout>
                    </Route>
                    <Route path="/">
                        <Layout hero={<MainHero />}>
                            <MainPage />
                        </Layout>
                    </Route>
                </Switch>
            </Suspense>
        </Router>
    );
};

export default hot(App);
