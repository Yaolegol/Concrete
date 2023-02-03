// @flow
import { CustomLink } from "common/components/Link/Custom";
import React from "react";
import { FormattedMessage } from "react-intl";
import "./index.less";

export const Description = (): React$Node => {
    return (
        <div className="main-home-description">
            <div className="main-home-description__content-section">
                <h3 className="main-home-description__content-title">
                    <FormattedMessage id="main.descriptionSection.title" />
                </h3>
                <p className="main-home-description__content-description">
                    <FormattedMessage id="main.descriptionSection.description" />
                </p>
            </div>
            <div className="main-home-description__image-section">
                <img
                    alt=""
                    className="main-home-description__image-main"
                    src="/images/main/description/room.jpg"
                />
                <img
                    alt=""
                    className="main-home-description__image-second"
                    src="/images/main/description/table.jpg"
                />
            </div>
        </div>
    );
};
