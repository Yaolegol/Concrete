// @flow
import { Layout } from "common/components/Layout";
import { actionHideMobileMenu } from "modules/MobileMenu/actions";
import { Description } from "pages/Main/Description";
import { Portfolio } from "pages/Main/Portfolio";
import { Hero } from "pages/Main/Hero";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./index.less";

const MainPage = (): React$Node => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actionHideMobileMenu());
    }, [dispatch]);

    return (
        <Layout hero={<Hero />}>
            <div className="main-page">
                <Description />
                <Portfolio />
            </div>
        </Layout>
    );
};

export default MainPage;
