// @flow
import { ShopNowButton } from "common/components/Button/ShopNowButton";
import React from "react";
import "./index.less";

type TProps = {
    buttonText?: string,
    description: string,
    imgAlt: string,
    imgSrc: string,
    key?: string,
    title: string,
};

export const Slide = ({
    description,
    imgAlt,
    imgSrc,
    key,
    title,
}: TProps): React$Node => {
    return (
        <div className="main-home-hero-slide" key={key}>
            <div className="main-home-hero-slide__image-section">
                <img
                    className="main-home-hero-slide__image"
                    src={imgSrc}
                    alt={imgAlt}
                />
            </div>
            <div className="main-home-hero-slide__content-section">
                <div className="main-home-hero-slide__content">
                    <h1 className="main-home-hero-slide__content-header">
                        {title}
                    </h1>
                    <p className="main-home-hero-slide__content-description">
                        {description}
                    </p>
                    <div className="main-home-hero-slide__button-container">
                        <ShopNowButton />
                    </div>
                </div>
            </div>
        </div>
    );
};
