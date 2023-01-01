// @flow
import { SliderMain } from "common/components/Slider/SliderMain";
import React from "react";
import ReactDOM from "react-dom";
import "./index.less";

export const Hero = (): React$Node => {
    const layoutHeroSectionContainer = document.querySelector(
        "#id-layout-hero-section"
    );

    if (!layoutHeroSectionContainer) {
        return <></>;
    }

    return ReactDOM.createPortal(
        <div className="main-hero">
            <SliderMain />
        </div>,
        layoutHeroSectionContainer
    );
};
