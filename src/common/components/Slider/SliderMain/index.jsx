// @flow
import { SliderMainSlide } from "common/components/Slider/SliderMain/SliderMainSlide";
import ArrowIcon from "images/arrow-right.svg";
import { Slider } from "common/components/Slider";
import React, { useState, useCallback } from "react";
import { useIntl } from "react-intl";
import "./index.less";

export const SliderMain = () => {
    const [swiper, setSwiper] = useState();

    const intl = useIntl();

    const slideNext = useCallback(() => {
        if (swiper) {
            swiper.slideNext(700);
        }
    }, [swiper]);

    const slidePrev = useCallback(() => {
        if (swiper) {
            swiper.slidePrev(700);
        }
    }, [swiper]);

    return (
        <div className="slider-main">
            <Slider onSwiper={setSwiper}>
                <SliderMainSlide
                    buttonText={intl.formatMessage({
                        id: "common.buttons.shopNow.title",
                    })}
                    description={intl.formatMessage({
                        id: "hero.slide.description",
                    })}
                    imgAlt="Hero"
                    imgSrc="images/main/header/hero.jpg"
                    onClick={() => console.log("click")}
                    title={intl.formatMessage({
                        id: "hero.slide.title",
                    })}
                />
                <SliderMainSlide
                    buttonText={intl.formatMessage({
                        id: "common.buttons.shopNow.title",
                    })}
                    description={intl.formatMessage({
                        id: "hero.slide.description",
                    })}
                    imgAlt="Hero"
                    imgSrc="images/main/header/hero.jpg"
                    onClick={() => console.log("click")}
                    title={intl.formatMessage({
                        id: "hero.slide.title",
                    })}
                />
                <SliderMainSlide
                    buttonText={intl.formatMessage({
                        id: "common.buttons.shopNow.title",
                    })}
                    description={intl.formatMessage({
                        id: "hero.slide.description",
                    })}
                    imgAlt="Hero"
                    imgSrc="images/main/header/hero.jpg"
                    onClick={() => console.log("click")}
                    title={intl.formatMessage({
                        id: "hero.slide.title",
                    })}
                />
            </Slider>
            <div className="slider-main__controls">
                <button
                    className="slider-main__control-button"
                    onClick={slidePrev}
                >
                    <ArrowIcon className="slider-main__control-icon slider-main__control-icon_left" />
                </button>
                <button
                    className="slider-main__control-button"
                    onClick={slideNext}
                >
                    <ArrowIcon className="slider-main__control-icon" />
                </button>
            </div>
        </div>
    );
};
