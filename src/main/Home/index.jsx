// @flow
import { usePageScrollUp } from "hooks/scroll";
import { Description } from "main/Home/Description";
import { Portfolio } from "main/Home/Portfolio";
import React from "react";
import "./index.less";

const HomePage = (): React$Node => {
    usePageScrollUp();

    return (
        <div className="main-home">
            <Description />
            <div className="main-home__container">
                <Portfolio />
            </div>
        </div>
    );
};

export default HomePage;
