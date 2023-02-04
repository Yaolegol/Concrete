import { useCallback, useEffect, useMemo, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

export const useGetSortQuery = () => {
    const location = useLocation();
    const [currentSortQuery, setCurrentSortQuery] = useState("");
    const [previousSortQuery, setPreviousSortQuery] = useState("");

    const params = new URLSearchParams(location.search);
    const queryParam = params.get("sort");

    useEffect(() => {
        setPreviousSortQuery(currentSortQuery);
        setCurrentSortQuery(queryParam);
    }, [currentSortQuery, queryParam]);

    return useMemo(() => {
        const [name, value] = currentSortQuery
            ? currentSortQuery.split("_")
            : [];

        return {
            data: {
                name,
                value,
            },
            query: {
                current: currentSortQuery,
                previous: previousSortQuery,
            },
        };
    }, [currentSortQuery, previousSortQuery]);
};

export const useSetSortQuery = () => {
    const location = useLocation();
    const history = useHistory();

    const setSortQuery = useCallback(
        ({ name, value }) => {
            const params = new URLSearchParams(location.search);

            if (!value) {
                params.delete("sort");
            } else {
                params.set("sort", `${name}_${value}`);
            }

            history.push({
                search: params.toString(),
            });
        },
        [history, location]
    );

    return {
        setSortQuery,
    };
};
