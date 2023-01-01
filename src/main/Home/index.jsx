// @flow
import { Description } from "main/Home/Description";
import { Portfolio } from "main/Home/Portfolio";
import React from "react";

const MainPage = (): React$Node => {
    return (
        <>
            <Description />
            <Portfolio />
        </>
    );
};

export default MainPage;
