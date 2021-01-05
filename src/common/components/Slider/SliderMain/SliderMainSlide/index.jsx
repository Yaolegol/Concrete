// @flow
import { ShopNowButton } from "common/components/Button/ShopNowButton";
import React from "react";
import "./index.less";

type TProps = {
    buttonText?: string,
    description: string,
    imgAlt: string,
    imgSrc: string,
    onClick?: () => void,
    title: string,
};

export const SliderMainSlide = ({
    description,
    imgAlt,
    imgSrc,
    onClick,
    title,
}: TProps): React$Node => {
    return (
        <div className="slider-main-slide">
            <div className="slider-main-slide__image-section">
                <img
                    className="slider-main-slide__image"
                    src={imgSrc}
                    alt={imgAlt}
                />
            </div>
            <div className="slider-main-slide__content-section">
                <div className="slider-main-slide__content">
                    <h1 className="slider-main-slide__content-header">
                        {title}
                    </h1>
                    <p className="slider-main-slide__content-description">
                        {description}
                    </p>
                    <div className="slider-main-slide__button-container">
                        <ShopNowButton onClick={onClick} />
                    </div>
                </div>
            </div>
        </div>
    );
};
