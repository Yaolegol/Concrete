// @flow
import { Description } from "main/Home/Description";
import { Portfolio } from "main/Home/Portfolio";
import React from "react";
import "./index.less";

const MainPage = (): React$Node => {
    return (
        <div className="main-page">
            <Description />
            <Portfolio />
        </div>
    );
};

export default MainPage;
