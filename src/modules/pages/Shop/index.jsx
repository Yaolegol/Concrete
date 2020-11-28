// @flow
import { Layout } from "common/components/Layout";
import { ProductCard } from "common/components/ProductCard";
import { selectCartProductsItems } from "pages/Cart/selectors";
import { actionGetProducts } from "pages/Shop/actions";
import { ShopPageFilters } from "pages/Shop/components/ShopPageFilters";
import { selectProductsList } from "pages/Shop/selectors";
import React, { useEffect, useMemo } from "react";
import { connect } from "react-redux";
import "./index.less";

type TProps = {
    cartProducts: any,
    dispatch: any,
    products: any,
};

const ShopPage = ({ cartProducts, dispatch, products }: TProps): React$Node => {
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
                        <ShopPageFilters />
                    </div>
                    <div className="shop-page__goods-section">
                        {productCards}
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
