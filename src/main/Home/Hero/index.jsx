// @flow
import { SliderBase } from "common/components/Slider/Base";
import { Controls } from "main/Home/Hero/Controls";
import { Slide } from "main/Home/Hero/Slide";
import React, { useMemo, useState } from "react";
import { useIntl } from "react-intl";
import "./index.less";

export const HomeHero = (): React$Node => {
    const [swiper, setSwiper] = useState();
    const intl = useIntl();

    const slides = useMemo(() => {
        return new Array(3).fill(
            <Slide
                buttonText={intl.formatMessage({
                    id: "common.buttons.shopNow.title",
                })}
                description={intl.formatMessage({
                    id: "hero.slide.description",
                })}
                imgAlt="Test image"
                imgSrc="images/main/hero/hero.jpg"
                title={intl.formatMessage({
                    id: "hero.slide.title",
                })}
            />
        );
    }, [intl]);

    return (
        <div className="main-home-hero">
            <SliderBase onSwiper={setSwiper} slides={slides} spaceBetween={0} />
            <Controls swiper={swiper} />
        </div>
    );
};
