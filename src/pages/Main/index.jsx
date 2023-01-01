// @flow
import { Description } from "pages/Main/Description";
import { Hero } from "pages/Main/Hero";
import { Portfolio } from "pages/Main/Portfolio";
import React from "react";
import "./index.less";

const MainPage = (): React$Node => {
    return (
        <>
            <Hero />
            <div className="main-page">
                <Description />
                <Portfolio />
            </div>
        </>
    );
};

export default MainPage;
