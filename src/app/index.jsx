// @flow
import { Layout } from "common/components/Layout";
import { HomeHero } from "main/Home/Hero";
import { actionGetUser } from "modules/User/actions";
import React, { Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { hot } from "react-hot-loader/root";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.less";

const Admin = React.lazy(() => import("main/Admin"));
const Cart = React.lazy(() => import("main/Cart"));
const Home = React.lazy(() => import("main/Home"));
const LogIn = React.lazy(() => import("main/LogIn"));
const Profile = React.lazy(() => import("main/Profile"));
const Shop = React.lazy(() => import("main/Shop"));
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
                            <Admin />
                        </Layout>
                    </Route>
                    <Route path="/cart">
                        <Layout>
                            <Cart />
                        </Layout>
                    </Route>
                    <Route path="/login">
                        <Layout>
                            <LogIn />
                        </Layout>
                    </Route>
                    <Route path="/profile">
                        <Layout>
                            <Profile />
                        </Layout>
                    </Route>
                    <Route path="/shop">
                        <Layout>
                            <Shop />
                        </Layout>
                    </Route>
                    <Route path="/signup">
                        <Layout>
                            <SignUp />
                        </Layout>
                    </Route>
                    <Route path="/">
                        <Layout hero={<HomeHero />}>
                            <Home />
                        </Layout>
                    </Route>
                </Switch>
            </Suspense>
        </Router>
    );
};

export default hot(App);
