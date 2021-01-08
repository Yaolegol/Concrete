// @flow
import { Button } from "common/components/Button";
import { SortSelect } from "common/components/CustomSelect/SortSelect";
import { Layout } from "common/components/Layout";
import { ProductCard } from "common/components/ProductCard";
import { selectCartProductsItems } from "modules/Cart/selectors";
import { actionHideMobileMenu } from "modules/MobileMenu/actions";
import {
    actionGetProducts,
    actionResetPage,
    actionResetProductsFilters,
    actionResetProductsSorts,
    actionSetPage,
    actionSetProductsSort,
} from "modules/Shop/actions";
import { selectCurrentPage, selectProducts } from "modules/Shop/selectors";
import { Filters } from "pages/Shop/components/Filters";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import "./index.less";

type TProps = {
    cartProducts: any,
    currentPage: number,
    dispatch: any,
    products: any,
};

const ShopPage = ({
    cartProducts,
    currentPage,
    dispatch,
    products,
}: TProps): React$Node => {
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

    const loadMoreProducts = useCallback(() => {
        dispatch(actionSetPage(currentPage + 1));
        dispatch(actionGetProducts());
    }, [currentPage, dispatch]);

    const productCards = useMemo(() => {
        return products.list.map(
            ({ description, _id, images, price, title }) => {
                const initialCount = cartProducts[_id]
                    ? cartProducts[_id].count
                    : 0;
                return (
                    <div className="shop-page__product-container" key={_id}>
                        <ProductCard
                            description={description}
                            id={_id}
                            imageUrl={images[0]}
                            initialCount={initialCount}
                            price={price}
                            title={title}
                        />
                    </div>
                );
            }
        );
    }, [cartProducts, products]);

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
        dispatch(actionHideMobileMenu());
        dispatch(actionResetPage());
        dispatch(actionResetProductsFilters());
        dispatch(actionResetProductsSorts());
        dispatch(actionGetProducts());
    }, [dispatch]);

    return (
        <Layout>
            <div className="shop-page">
                <h1>
                    <FormattedMessage id="shop.title" />
                </h1>
                <div className="shop-page__content">
                    <div className="shop-page__filters-section">
                        <Filters />
                    </div>
                    <div className="shop-page__goods-section">
                        <div className="shop-page__sort-container">
                            <span className="shop-page__sort-select">
                                <SortSelect
                                    onChange={handleSortSelectChange}
                                    value={sortSelectValue}
                                />
                            </span>
                        </div>
                        <div className="shop-page__goods-container">
                            {productCards}
                        </div>
                        {showMore}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default (connect((state) => ({
    cartProducts: selectCartProductsItems(state),
    currentPage: selectCurrentPage(state),
    products: selectProducts(state),
}))(ShopPage): any);
