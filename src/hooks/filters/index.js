import { useCallback } from "react";
import { useHistory, useLocation } from "react-router-dom";

export const useGetFilters = () => {
    const location = useLocation();

    const params = new URLSearchParams(location.search);
    const filterQueryParam = params.get("filter");

    if (!filterQueryParam) {
        return {};
    }

    const filtersStringArray = filterQueryParam.split("__");

    return filtersStringArray.reduce((acc, nameValueString) => {
        if (!nameValueString) {
            return acc;
        }

        const [name, valuesString] = nameValueString.split("_");
        const values = valuesString.split("-");

        return {
            ...acc,
            [name]: values,
        };
    }, {});
};

export const useSetFiltersQuery = () => {
    const filtersData = useGetFilters();
    const location = useLocation();
    const history = useHistory();

    const getFiltersQueryValue = useCallback(
        ({ name, values }) => {
            const _filtersData = { ...filtersData };
            _filtersData[name] = [...values];

            return Object.entries(_filtersData).reduce(
                (acc, [name, values]) => {
                    if (!values.length) {
                        return acc;
                    }

                    const filterItemString = `${name}_${values.join("-")}`;

                    if (!acc) {
                        return filterItemString;
                    }

                    return "__" + filterItemString;
                },
                ""
            );
        },
        [filtersData]
    );

    const setFiltersQuery = useCallback(
        ({ name, values }) => {
            const filterValue = getFiltersQueryValue({ name, values });

            const params = new URLSearchParams(location.search);

            if (!filterValue) {
                params.delete("filter");
            } else {
                params.set("filter", filterValue);
            }

            history.push({
                search: params.toString(),
            });
        },
        [getFiltersQueryValue, history, location]
    );

    return {
        setFiltersQuery,
    };
};
