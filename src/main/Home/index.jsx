// @flow
import { Description } from "main/Home/Description";
import { Portfolio } from "main/Home/Portfolio";
import React from "react";
import "./index.less";

const HomePage = (): React$Node => {
    return (
        <div className="main-home">
            <div className="main-home__container">
                <Description />
            </div>
            <div className="main-home__container">
                <Portfolio />
            </div>
        </div>
    );
};

export default HomePage;
