// @flow
import { Description } from "pages/Main/Description";
import { Portfolio } from "pages/Main/Portfolio";
import { Hero } from "pages/Main/Hero";
import React from "react";
import "./index.less";

const MainPage = (): React$Node => {
    return (
        <div className="main-page">
            <Hero />
            <Description />
            <Portfolio />
        </div>
    );
};

export default MainPage;
