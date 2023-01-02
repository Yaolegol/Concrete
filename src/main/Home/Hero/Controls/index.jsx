// @flow
import React, { useCallback } from "react";
import ArrowIcon from "icons/arrow-right.svg";
import "./index.less";

type TProps = {
    swiper: any,
};

export const Controls = ({ swiper }: TProps): React$Node => {
    const slideNext = useCallback(() => {
        swiper.slideNext(300);
    }, [swiper]);

    const slidePrev = useCallback(() => {
        swiper.slidePrev(300);
    }, [swiper]);

    if (!swiper) {
        return <></>;
    }

    return (
        <div className="slider-main__controls">
            <button className="slider-main__control-button" onClick={slidePrev}>
                <ArrowIcon className="slider-main__control-icon slider-main__control-icon_left" />
            </button>
            <button className="slider-main__control-button" onClick={slideNext}>
                <ArrowIcon className="slider-main__control-icon" />
            </button>
        </div>
    );
};
