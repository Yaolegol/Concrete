import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const useCustomLocation = () => {
    const location = useLocation();
    const newSearch = location.search;
    const [currentSearch, setCurrentSearch] = useState(null);

    const isEqual = newSearch === currentSearch;

    useEffect(() => {
        if (isEqual) {
            return;
        }

        setCurrentSearch(newSearch);
    }, [isEqual, newSearch]);

    return {
        search: {
            currentSearch,
            isEqual,
            newSearch,
        },
    };
};
