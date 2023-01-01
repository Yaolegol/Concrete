// @flow
import { CustomLink } from "common/components/Link";
import React from "react";
import { FormattedMessage } from "react-intl";
import "./index.less";

export const Description = (): React$Node => {
    return (
        <div className="main-description">
            <div className="main-description__content-section">
                <div className="main-description__content">
                    <h3 className="main-description__content-title">
                        <FormattedMessage id="main.descriptionSection.title" />
                    </h3>
                    <p className="main-description__content-description">
                        <FormattedMessage id="main.descriptionSection.description" />
                    </p>
                    <div className="main-description__about-link-container">
                        <CustomLink url="/about">
                            <FormattedMessage id="common.learnMore.title" />
                        </CustomLink>
                    </div>
                </div>
            </div>
            <div className="main-description__image-section">
                <div className="main-description__image-container">
                    <img
                        className="main-description__image-main"
                        src="images/main/description/room.jpg"
                        alt="Room"
                    />
                    <img
                        className="main-description__image-second"
                        src="images/main/description/table.jpg"
                        alt="Table"
                    />
                </div>
            </div>
        </div>
    );
};
