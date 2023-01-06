// @flow
import BuyForm from "modules/Cart/components/BuyForm";
import { CartEmpty } from "modules/Cart/components/CartEmpty";
import { ProductsList } from "modules/Cart/components/ProductsList";
import { selectCartProductsData } from "modules/Cart/selectors";
import React from "react";
import { FormattedMessage } from "react-intl";
import { useSelector } from "react-redux";
import "./index.less";

const Cart = (): React$Node => {
    const cartProducts = useSelector(selectCartProductsData);

    return (
        <div className="cart-page">
            <h1 className="cart-page__title">
                <FormattedMessage id="cart.title" />
            </h1>
            <div className="cart-page__content-block">
                {!cartProducts.length ? (
                    <CartEmpty />
                ) : (
                    <>
                        <div className="cart-page__products-container">
                            <ProductsList dataList={cartProducts} />
                        </div>
                        <div className="cart-page__buy-form-container">
                            <BuyForm />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Cart;
