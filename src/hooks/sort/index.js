import { useCallback } from "react";
import { useHistory, useLocation } from "react-router-dom";

export const useGetSortQuery = () => {
    const location = useLocation();

    const params = new URLSearchParams(location.search);
    const queryParam = params.get("sort");

    if (!queryParam) {
        return {};
    }

    const [name, value] = queryParam.split("_");

    if (!value) {
        return {};
    }

    return {
        name,
        value,
    };
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
