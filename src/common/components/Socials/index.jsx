// @flow
import cn from "classnames";
import React from "react";
import "./index.less";

type TProps = {
    className?: string,
};

export const Socials = ({ className }: TProps): React$Node => {
    return (
        <div className={cn("socials", className)}>
            <a className="socials__link" href="#">
                <img
                    alt="Facebook"
                    className="socials__icon"
                    src="images/socials/facebook.svg"
                />
            </a>
            <a className="socials__link" href="#">
                <img
                    alt="Vk"
                    className="socials__icon"
                    src="images/socials/vk.svg"
                />
            </a>
            <a className="socials__link" href="#">
                <img
                    alt="Instagram"
                    className="socials__icon"
                    src="images/socials/instagram.svg"
                />
            </a>
            <a className="socials__link" href="#">
                <img
                    alt="Youtube"
                    className="socials__icon"
                    src="images/socials/youtube.svg"
                />
            </a>
        </div>
    );
};
