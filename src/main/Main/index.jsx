// @flow
import { Description } from "main/Main/Description";
import { Hero } from "main/Main/Hero";
import { Portfolio } from "main/Main/Portfolio";
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
