// @flow
import { Layout } from "common/components/Layout";
import { Description } from "pages/Main/Description";
import { Portfolio } from "pages/Main/Portfolio";
import { Hero } from "pages/Main/Hero";
import React from "react";
import "./index.less";

const MainPage = (): React$Node => {
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
