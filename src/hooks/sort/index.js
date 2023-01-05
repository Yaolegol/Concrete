import { useCallback } from "react";
import { useHistory, useLocation } from "react-router-dom";

export const useGetSortQuery = () => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);

    return params.get("sort");
};

export const useSetSortQuery = () => {
    const location = useLocation();
    const history = useHistory();

    const setFiltersQuery = useCallback(
        (value) => {
            const params = new URLSearchParams(location.search);
            params.set("sort", value);

            history.push({
                search: params.toString(),
            });
        },
        [history, location]
    );

    return {
        setFiltersQuery,
    };
};
