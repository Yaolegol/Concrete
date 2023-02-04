// @flow
import { SortSelect } from "common/components/CustomSelect/SortSelect";
import { useGetQueryFilters } from "hooks/filters";
import { usePageScrollUp } from "hooks/scroll";
import { useGetSortQuery } from "hooks/sort";
import { LoadMore } from "main/Shop/LoadMore";
import { ProductsBlock } from "main/Shop/ProductsBlock";
import { actionGetProducts } from "modules/Shop/actions";
import { Filters } from "modules/Shop/components/Filters";
import React, { useCallback, useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import { useDispatch } from "react-redux";
import "./index.less";

const ShopPage = (): React$Node => {
    usePageScrollUp();
    const dispatch = useDispatch();
    const sortQuery = useGetSortQuery();
    const filtersData = useGetQueryFilters();
    const [page, setPage] = useState(1);

    const getProducts = useCallback(
        ({ nextPage } = {}) => {
            dispatch(
                actionGetProducts({
                    filters: filtersData,
                    page: nextPage ?? page,
                    sort: sortQuery.data,
                })
            );
        },
        [dispatch, filtersData, page, sortQuery]
    );

    const loadMoreProducts = useCallback(() => {
        const nextPage = page + 1;

        setPage(nextPage);
        getProducts({ nextPage });
    }, [getProducts, page]);

    const resetPage = useCallback(() => {
        setPage(1);
    }, []);

    useEffect(() => {
        const { current, previous } = sortQuery.query;

        if (current === previous) {
            return;
        }

        getProducts();
    }, [getProducts, sortQuery]);

    return (
        <div className="shop-page">
            <h1 className="shop-page__title">
                <FormattedMessage id="shop.title" />
            </h1>
            <div className="shop-page__content">
                <div className="shop-page__section-filters">
                    <Filters onAfterChange={resetPage} />
                </div>
                <div className="shop-page__section-products">
                    <div className="shop-page__sort-block">
                        <div className="shop-page__sort-container">
                            <SortSelect onChange={resetPage} />
                        </div>
                    </div>
                    <div className="shop-page__products-area">
                        <ProductsBlock />
                    </div>
                    <div className="shop-page__show-more-container">
                        <LoadMore onClick={loadMoreProducts} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopPage;
