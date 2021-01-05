// @flow
import { SliderMain } from "common/components/Slider/SliderMain";
import React from "react";
import "./index.less";

export const Hero = (): React$Node => {
    return (
        <div className="main-hero">
            <SliderMain></SliderMain>
        </div>
    );
};
