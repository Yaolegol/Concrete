// @flow
import { SortSelect } from "common/components/CustomSelect/SortSelect";
import { Layout } from "common/components/Layout";
import { ProductCard } from "common/components/ProductCard";
import { selectCartProductsItems } from "modules/Cart/selectors";
import { actionGetProducts, actionSetProductsSort } from "modules/Shop/actions";
import { selectProductsList } from "modules/Shop/selectors";
import { Filters } from "pages/Shop/components/Filters";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { connect } from "react-redux";
import "./index.less";

type TProps = {
    cartProducts: any,
    dispatch: any,
    products: any,
};

const ShopPage = ({ cartProducts, dispatch, products }: TProps): React$Node => {
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
        return products.map(({ description, _id, images, price, title }) => {
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
        });
    }, [cartProducts, products]);

    useEffect(() => {
        dispatch(actionGetProducts());
    }, [dispatch]);

    return (
        <Layout>
            <div className="shop-page">
                <h1>Shop</h1>
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
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default (connect((state) => ({
    cartProducts: selectCartProductsItems(state),
    products: selectProductsList(state),
}))(ShopPage): any);
