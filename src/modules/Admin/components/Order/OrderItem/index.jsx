// @flow
import React from "react";
import "./index.less";

type TProps = {
    alt?: string,
    countInCart: number,
    description: string,
    email: string,
    price: number,
    src: string,
    title: string,
    totalPrice: number,
};

export const OrderItem = ({
    alt = "",
    countInCart,
    description,
    email,
    price,
    src,
    title,
    totalPrice,
}: TProps): React$Node => {
    return (
        <div className="admin-order-item">
            <img alt={title} className="admin-order-item__image" src={src} />
            <h4>{title}</h4>
            <p>{description}</p>
            <p>{price}</p>
            <p>{countInCart}</p>
            <p>{totalPrice}</p>
            <p>{email}</p>
        </div>
    );
};
