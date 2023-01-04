// @flow
import { Button } from "common/components/Button";
import { SortSelect } from "common/components/CustomSelect/SortSelect";
import { useGetQueryFilters } from "hooks/filters";
import { useCustomLocation } from "hooks/location";
import { selectCartProductsItems } from "modules/Cart/selectors";
import { actionGetProducts, actionSetProductsSort } from "modules/Shop/actions";
import { Filters } from "modules/Shop/components/Filters";
import { ProductCard } from "modules/Shop/components/ProductCard";
import { selectProducts } from "modules/Shop/selectors";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import "./index.less";

type TProps = {
    cartProducts: any,
    dispatch: any,
    products: any,
};

const ShopPage = ({ cartProducts, dispatch, products }: TProps): React$Node => {
    const filtersData = useGetQueryFilters();
    const { search } = useCustomLocation();
    const [page, setPage] = useState(1);
    const [sortSelectValue, setSortSelectValue] = useState(null);

    const handleSortSelectChange = useCallback(
        (value) => {
            setSortSelectValue(value);
            dispatch(
                actionSetProductsSort({
                    [value.id]: value.value,
                })
            );
            dispatch(actionGetProducts());
        },
        [dispatch]
    );

    const productCards = useMemo(() => {
        return products.list.map(
            ({ description, _id, images, price, title }) => {
                const { count } = cartProducts[_id] || {};
                const initialCount = count || 0;

                return (
                    <div className="shop-page__product-container" key={_id}>
                        <div className="shop-page__product-item">
                            <ProductCard
                                description={description}
                                id={_id}
                                imageUrl={images[0]}
                                initialCount={initialCount}
                                price={price}
                                title={title}
                            />
                        </div>
                    </div>
                );
            }
        );
    }, [cartProducts, products]);

    const getProducts = useCallback(
        ({ nextPage } = {}) => {
            dispatch(
                actionGetProducts({
                    filters: filtersData,
                    page: nextPage ?? page,
                })
            );
        },
        [dispatch, filtersData, page]
    );

    const loadMoreProducts = useCallback(() => {
        const nextPage = page + 1;

        setPage(nextPage);
        getProducts({ nextPage });
    }, [getProducts, page]);

    const showMore = useMemo(() => {
        const isShow = products.list.length < products.count;
        return isShow ? (
            <div className="shop-page__show-more-container">
                <Button onClick={loadMoreProducts} theme="white">
                    <FormattedMessage id="common.showMore" />
                </Button>
            </div>
        ) : null;
    }, [loadMoreProducts, products.count, products.list.length]);

    useEffect(() => {
        const { currentSearch, newSearch } = search;

        if (currentSearch === newSearch) {
            return;
        }

        getProducts();
    }, [getProducts, search]);

    useEffect(() => {
        setPage(1);
    }, [filtersData]);

    return (
        <div className="shop-page">
            <h1 className="shop-page__title">
                <FormattedMessage id="shop.title" />
            </h1>
            <div className="shop-page__content">
                <div className="shop-page__section-filters">
                    <Filters />
                </div>
                <div className="shop-page__section-products">
                    <div className="shop-page__sort-block">
                        <div className="shop-page__sort-container">
                            <SortSelect
                                onChange={handleSortSelectChange}
                                value={sortSelectValue}
                            />
                        </div>
                    </div>
                    <div className="shop-page__products-area">
                        <div className="shop-page__products-block">
                            {productCards}
                        </div>
                    </div>
                    {showMore}
                </div>
            </div>
        </div>
    );
};

export default connect<TProps, void, _, _, _, _>((state) => ({
    cartProducts: selectCartProductsItems(state),
    products: selectProducts(state),
}))(ShopPage);
