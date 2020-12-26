// @flow
import { Button } from "common/components/Button";
import { Layout } from "common/components/Layout";
import { OrderHeader } from "common/components/Order/OrderHeader";
import { OrderItem } from "common/components/Order/OrderItem";
import { actionBuyProducts } from "pages/Cart/actions";
import { CartEmpty } from "pages/Cart/components/CartEmpty";
import { selectCartProductsData } from "pages/Cart/selectors";
import type { TCartProductsData } from "pages/Cart/types";
import React, { useCallback, useMemo } from "react";
import { connect } from "react-redux";
import "./index.less";

type TProps = {
    cartProductsData: TCartProductsData,
    dispatch: any,
};

const CartPage = ({ cartProductsData, dispatch }: TProps) => {
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

    console.log("cartProductsData");
    console.log(cartProductsData);

    const handleBuy = useCallback(() => {
        const purchase = cartProductsData.map(
            ({ _id, countInCart, price, totalPrice }) => {
                return {
                    count: countInCart,
                    productID: _id,
                    price,
                    sum: totalPrice,
                };
            }
        );

        dispatch(
            actionBuyProducts({
                email: "hardcode@email.ru",
                purchase,
            })
        );
    }, [cartProductsData, dispatch]);

    return (
        <Layout>
            <div className="cart-page">
                <h1 className="cart-page__title">Cart</h1>
                {content}
                <div>
                    <Button onClick={handleBuy}>Buy</Button>
                </div>
            </div>
        </Layout>
    );
};

export default (connect((state) => ({
    cartProductsData: selectCartProductsData(state),
}))(CartPage): any);
