import { useCallback, useEffect, useMemo, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

export const useGetQueryFilters = () => {
    const location = useLocation();
    const [currentFiltersQuery, setCurrentFiltersQuery] = useState("");
    const [previousFiltersQuery, setPreviousFiltersQuery] = useState("");

    const params = new URLSearchParams(location.search);
    const filterQueryParam = params.get("filter");

    useEffect(() => {
        setPreviousFiltersQuery(currentFiltersQuery);
        setCurrentFiltersQuery(filterQueryParam);
    }, [currentFiltersQuery, filterQueryParam]);

    return useMemo(() => {
        const filtersStringArray = currentFiltersQuery
            ? currentFiltersQuery.split("__")
            : [];

        const data = filtersStringArray.reduce((acc, nameValueString) => {
            if (!nameValueString) {
                return acc;
            }

            const [name, valuesString] = nameValueString.split("_");
            const [min, max] = valuesString.split("-");

            return {
                ...acc,
                [name]: [Number(min), Number(max)],
            };
        }, {});

        return {
            data,
            query: {
                current: currentFiltersQuery,
                previous: previousFiltersQuery,
            },
        };
    }, [currentFiltersQuery, previousFiltersQuery]);
};

export const useSetFiltersQuery = () => {
    const filtersData = useGetQueryFilters();
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
