// @flow
import { useEffect } from "react";

export const usePageScrollUp = () => {
    useEffect(() => {
        window.scrollTo({
            behavior: "instant",
            top: 0,
        });
    }, []);
};
