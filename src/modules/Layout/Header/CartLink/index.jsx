// @flow
import cn from "classnames";
import CartIcon from "icons/cart.svg";
import { selectCartProductsTotal } from "modules/Cart/selectors";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./index.less";

export const CartLink = (): React$Node => {
    const cartProductsTotal = useSelector(selectCartProductsTotal);

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
