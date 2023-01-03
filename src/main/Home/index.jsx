// @flow
import { Description } from "main/Home/Description";
import { Portfolio } from "main/Home/Portfolio";
import React from "react";
import "./index.less";

const HomePage = (): React$Node => {
    return (
        <div className="main-home">
            <div className="main-home__description-container">
                <Description />
            </div>
            <Portfolio />
        </div>
    );
};

export default HomePage;
