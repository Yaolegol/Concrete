// @flow
import BuyForm from "modules/Cart/components/BuyForm";
import { CartEmpty } from "modules/Cart/components/CartEmpty";
import ProductsList from "modules/Cart/components/ProductsList";
import { selectCartProductsData } from "modules/Cart/selectors";
import type { TCartProductsData } from "modules/Cart/types";
import React from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import "./index.less";

type TProps = {
    cartProductsDataList: TCartProductsData,
};

const Cart = ({ cartProductsDataList }: TProps): React$Node => {
    return (
        <div className="cart-page">
            <h1 className="cart-page__title">
                <FormattedMessage id="cart.title" />
            </h1>
            <div className="cart-page__content-block">
                {!cartProductsDataList.length ? (
                    <CartEmpty />
                ) : (
                    <>
                        <div className="cart-page__products-container">
                            <ProductsList />
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

export default connect<TProps, void, _, _, _, _>((state) => ({
    cartProductsDataList: selectCartProductsData(state),
}))(Cart);
