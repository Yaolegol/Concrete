// @flow
import { LayoutHero } from "common/components/Layout/Hero";
import { SliderMain } from "common/components/Slider/SliderMain";
import React from "react";
import ReactDOM from "react-dom";

export const Hero = (): React$Node => {
    const layoutHeroSectionContainer = document.querySelector(
        "#id-layout-hero-section"
    );

    if (!layoutHeroSectionContainer) {
        console.error("No #id-layout-hero-section found");

        return <></>;
    }

    return ReactDOM.createPortal(
        <LayoutHero>
            <SliderMain />
        </LayoutHero>,
        layoutHeroSectionContainer
    );
};
