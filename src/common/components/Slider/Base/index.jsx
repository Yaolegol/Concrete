// @flow
import { getRandomString } from "helpers/random";
import React, { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.less";
import "./index.less";

type TProps = {
    slides: Array<React$Node>,
};

export const SliderBase = ({ slides, ...rest }: TProps): React$Node => {
    const _slides = useMemo(() => {
        return slides.map((item) => {
            return <SwiperSlide key={getRandomString()}>{item}</SwiperSlide>;
        });
    }, [slides]);

    return (
        <div className="common-components-slider-base">
            <Swiper {...rest}>{_slides}</Swiper>
        </div>
    );
};
