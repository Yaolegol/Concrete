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
                    src="images/main/header/social/facebook.png"
                    alt="Facebook"
                />
            </a>
            <a className="socials__link" href="#">
                <img src="images/main/header/social/vk.png" alt="Vk" />
            </a>
            <a className="socials__link" href="#">
                <img
                    src="images/main/header/social/instagram.png"
                    alt="Instagram"
                />
            </a>
            <a className="socials__link" href="#">
                <img
                    src="images/main/header/social/youtube.png"
                    alt="Youtube"
                />
            </a>
        </div>
    );
};
