// @flow
import { useEffect } from "react";

export const usePageScrollUp = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
};
