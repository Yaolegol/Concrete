// @flow
import cn from "classnames";
import CartIcon from "images/main/header/cart.svg";
import { selectCartProductsTotal } from "modules/Cart/selectors";
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./index.less";

type TProps = {
    cartProductsTotal: number,
};

const CartLink = ({ cartProductsTotal }: TProps): React$Node => {
    return (
        <Link className="cart-link" to="/cart">
            <div className="cart-link__icon-container">
                <CartIcon className="cart-link__icon" />
                <span
                    className={cn(
                        "cart-link__counter",
                        cartProductsTotal === 0
                            ? "cart-link__counter_hidden"
                            : null
                    )}
                >
                    {cartProductsTotal}
                </span>
            </div>
        </Link>
    );
};

export default (connect((state) => ({
    cartProductsTotal: selectCartProductsTotal(state),
}))(CartLink): any);
