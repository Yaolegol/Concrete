// @flow
import cn from "classnames";
import CartIcon from "images/main/header/cart.svg";
import React from "react";
import "./index.less";

type TProps = {
    count: number,
    onDecrement: () => any,
    onIncrement: () => any,
};

export const ProductCardCounter = ({
    count,
    onDecrement,
    onIncrement,
}: TProps): React$Node => {
    return (
        <div className="product-card-counter">
            <button
                className={cn(
                    "product-card-counter__item product-card-counter__icon-container",
                    count === 0 ? "product-card-counter__item_active" : null
                )}
                onClick={onIncrement}
            >
                <CartIcon className="product-card-counter__icon" />
            </button>
            <div
                className={cn(
                    "product-card-counter__item",
                    count !== 0 ? "product-card-counter__item_active" : null
                )}
            >
                <button
                    className="product-card-counter__button"
                    onClick={onDecrement}
                >
                    -
                </button>
                <span className="product-card-counter__count">{count}</span>
                <button
                    className="product-card-counter__button"
                    onClick={onIncrement}
                >
                    +
                </button>
            </div>
        </div>
    );
};
