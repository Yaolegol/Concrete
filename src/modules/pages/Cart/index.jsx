// @flow
import { Layout } from "common/components/Layout";
import { OrderHeader } from "common/components/Order/OrderHeader";
import { OrderItem } from "common/components/Order/OrderItem";
import { CartEmpty } from "pages/Cart/components/CartEmpty";
import { selectCartProductsData } from "pages/Cart/selectors";
import type { TCartProductsData } from "pages/Cart/types";
import React, { useMemo } from "react";
import { connect } from "react-redux";
import "./index.less";

type TProps = {
    cartProductsData: TCartProductsData,
};

const CartPage = ({ cartProductsData }: TProps) => {
    const contentItems = useMemo(() => {
        return cartProductsData.map(
            ({
                countInCart,
                description,
                _id,
                images,
                price,
                title,
                totalPrice,
            }) => {
                return (
                    <OrderItem
                        countInCart={countInCart}
                        description={description}
                        key={_id}
                        price={price}
                        src={images[0]}
                        title={title}
                        totalPrice={totalPrice}
                    />
                );
            }
        );
    }, [cartProductsData]);

    const empty = useMemo(() => {
        return <CartEmpty />;
    }, []);

    const content = useMemo(() => {
        return contentItems.length ? (
            <div className="cart-page__content-section">
                <OrderHeader />
                <div className="cart-page__content-container">
                    {contentItems}
                </div>
            </div>
        ) : (
            empty
        );
    }, [contentItems, empty]);

    return (
        <Layout>
            <div className="cart-page">
                <h1 className="cart-page__title">Cart</h1>
                {content}
            </div>
        </Layout>
    );
};

export default connect((state) => ({
    cartProductsData: selectCartProductsData(state),
}))(CartPage);
