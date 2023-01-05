// @flow
import { selectUser } from "modules/User/selectors";
import { actionBuyProducts, actionResetCart } from "modules/Cart/actions";
import { BuyButton } from "modules/Cart/components/BuyButton";
import { BuyForm } from "modules/Cart/components/BuyForm";
import { CartEmpty } from "modules/Cart/components/CartEmpty";
import ProductsList from "modules/Cart/components/ProductsList";
import { selectCartProductsData } from "modules/Cart/selectors";
import type { TCartProductsData } from "modules/Cart/types";
import React, { useCallback, useMemo } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import "./index.less";

type TProps = {
    cartProductsDataList: TCartProductsData,
    dispatch: any,
    user: any,
};

const Cart = ({ cartProductsDataList, dispatch, user }: TProps): React$Node => {
    const history = useHistory();

    const handleBuy = useCallback(
        ({ email }) => {
            const purchase = cartProductsDataList.map(
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
                    email: email || user.email,
                    purchase,
                })
            ).then(({ errors }) => {
                if (!errors) {
                    dispatch(actionResetCart());
                    history.push("/");
                }
            });
        },
        [cartProductsDataList, dispatch, history, user]
    );

    const buyBlock = useMemo(() => {
        if (user) {
            return <BuyButton onClick={handleBuy} />;
        }

        return <BuyForm onSubmit={handleBuy} />;
    }, [handleBuy, user]);

    const content = useMemo(() => {
        if (!cartProductsDataList.length) {
            return <CartEmpty />;
        }

        return (
            <div className="cart-page__content-block">
                <div className="cart-page__products-container">
                    <ProductsList />
                </div>
                <div>{buyBlock}</div>
            </div>
        );
    }, [buyBlock, cartProductsDataList]);

    return (
        <div className="cart-page">
            <h1 className="cart-page__title">
                <FormattedMessage id="cart.title" />
            </h1>
            {content}
        </div>
    );
};

export default connect<TProps, void, _, _, _, _>((state) => ({
    cartProductsDataList: selectCartProductsData(state),
    user: selectUser(state),
}))(Cart);
