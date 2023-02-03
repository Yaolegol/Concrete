// @flow
import { Layout } from "modules/Layout";
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
            <Layout>
                <Suspense fallback={<div />}>
                    <Switch>
                        <Route path="/admin">
                            <Admin />
                        </Route>
                        <Route path="/cart">
                            <Cart />
                        </Route>
                        <Route path="/login">
                            <LogIn />
                        </Route>
                        <Route path="/profile">
                            <Profile />
                        </Route>
                        <Route path="/shop">
                            <Shop />
                        </Route>
                        <Route path="/signup">
                            <SignUp />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </Suspense>
            </Layout>
        </Router>
    );
};

export default hot(App);
