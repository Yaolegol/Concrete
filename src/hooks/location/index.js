import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const useCustomLocation = () => {
    const location = useLocation();
    const newSearch = location.search;
    const [currentSearch, setCurrentSearch] = useState(null);

    useEffect(() => {
        if (newSearch !== currentSearch) {
            setCurrentSearch(newSearch);
        }
    }, [currentSearch, newSearch]);

    return {
        search: {
            newSearch,
            currentSearch,
        },
    };
};
