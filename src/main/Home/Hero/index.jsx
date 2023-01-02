// @flow
import { Slider } from "common/components/Slider/Base";
import { getRandomString } from "helpers/random";
import { Controls } from "main/Home/Hero/Controls";
import { Slide } from "main/Home/Hero/Slide";
import React, { useMemo, useState } from "react";
import { useIntl } from "react-intl";
import "./index.less";

export const HomeHero = (): React$Node => {
    const [swiper, setSwiper] = useState();
    const intl = useIntl();

    const slides = useMemo(() => {
        return [
            <Slide
                buttonText={intl.formatMessage({
                    id: "common.buttons.shopNow.title",
                })}
                description={intl.formatMessage({
                    id: "hero.slide.description",
                })}
                imgAlt="Test image"
                imgSrc="images/main/hero/hero.jpg"
                key={getRandomString()}
                title={intl.formatMessage({
                    id: "hero.slide.title",
                })}
            />,
            <Slide
                buttonText={intl.formatMessage({
                    id: "common.buttons.shopNow.title",
                })}
                description={intl.formatMessage({
                    id: "hero.slide.description",
                })}
                imgAlt="Test image"
                imgSrc="images/main/hero/hero.jpg"
                key={getRandomString()}
                title={intl.formatMessage({
                    id: "hero.slide.title",
                })}
            />,
            <Slide
                buttonText={intl.formatMessage({
                    id: "common.buttons.shopNow.title",
                })}
                description={intl.formatMessage({
                    id: "hero.slide.description",
                })}
                imgAlt="Test image"
                imgSrc="images/main/hero/hero.jpg"
                key={getRandomString()}
                title={intl.formatMessage({
                    id: "hero.slide.title",
                })}
            />,
        ];
    }, [intl]);

    return (
        <div className="slider-main">
            <Slider onSwiper={setSwiper}>{slides}</Slider>
            <Controls swiper={swiper} />
        </div>
    );
};
