// @flow
import { Button } from "common/components/Button";
import React from "react";
import { FormattedMessage } from "react-intl";
import "./index.less";

export const Portfolio = () => {
    return (
        <div className="main-portfolio">
            <h3>
                <FormattedMessage id="common.portfolio.title" />
            </h3>
            <div className="main-portfolio__image-section">
                <div className="main-portfolio__image-container">
                    <img
                        className="main-portfolio__image-main"
                        src="img/main/portfolio/main.jpg"
                        alt="House"
                    />
                    <div className="main-portfolio__secondary-images-container">
                        <img
                            className="main-portfolio__image-secondary main-portfolio__image-secondary_left-top"
                            src="img/main/portfolio/secondary-lt.jpg"
                            alt="Room"
                        />
                        <img
                            className="main-portfolio__image-secondary main-portfolio__image-secondary_right-top"
                            src="img/main/portfolio/secondary-rt.jpg"
                            alt="Room"
                        />
                        <img
                            className="main-portfolio__image-secondary main-portfolio__image-secondary_left-bottom"
                            src="img/main/portfolio/secondary-lb.jpg"
                            alt="Room"
                        />
                        <img
                            className="main-portfolio__image-secondary main-portfolio__image-secondary_right-bottom"
                            src="img/main/portfolio/secondary-rb.jpg"
                            alt="Room"
                        />
                    </div>
                </div>
            </div>
            <div className="main-portfolio__button-container">
                <Button theme="white">
                    <FormattedMessage id="common.portfolio.title" />
                </Button>
            </div>
        </div>
    );
};
