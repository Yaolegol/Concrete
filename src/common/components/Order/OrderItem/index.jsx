// @flow
import React from "react";
import "./index.less";

type TProps = {
    alt?: string,
    countInCart: number,
    description: string,
    price: number,
    src: string,
    title: string,
    totalPrice: number,
};

export const OrderItem = ({
    alt = "",
    countInCart,
    description,
    price,
    src,
    title,
    totalPrice,
}: TProps): React$Node => {
    return (
        <div className="order-item">
            <img alt={title} className="order-item__image" src={src} />
            <h4>{title}</h4>
            <p className="order-item__item order-item__item_mobile-hidden">
                {description}
            </p>
            <p className="order-item__item order-item__item_mobile-hidden">
                {price}
            </p>
            <p className="order-item__item order-item__item_mobile-hidden">
                {countInCart}
            </p>
            <p>{totalPrice}</p>
        </div>
    );
};
