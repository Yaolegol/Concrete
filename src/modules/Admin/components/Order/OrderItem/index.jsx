// @flow
import React, { useCallback } from "react";
import "./index.less";
import { useIntl } from "react-intl";

type TProps = {
    countInCart: number,
    description: string,
    email: string,
    price: number,
    src: string,
    title: string,
    totalPrice: number,
};

export const OrderItem = ({
    countInCart,
    description,
    email,
    price,
    src,
    title,
    totalPrice,
}: TProps): React$Node => {
    const intl = useIntl();

    const createDescription = useCallback((msg) => {
        return `${msg}: `;
    }, []);

    return (
        <div className="admin-order-item">
            <img alt={title} className="admin-order-item__image" src={src} />
            <h4>{title}</h4>
            <p>
                <span className="order-item__data-description">
                    {createDescription(
                        intl.formatMessage({
                            id: "order.description",
                        })
                    )}
                </span>
                {description || "-"}
            </p>
            <p>
                <span className="order-item__data-description">
                    {createDescription(
                        intl.formatMessage({
                            id: "order.price",
                        })
                    )}
                </span>
                {price}
            </p>
            <p>
                <span className="order-item__data-description">
                    {createDescription(
                        intl.formatMessage({
                            id: "order.count",
                        })
                    )}
                </span>
                {countInCart}
            </p>
            <p>
                <span className="order-item__data-description">
                    {createDescription(
                        intl.formatMessage({
                            id: "order.total",
                        })
                    )}
                </span>
                {totalPrice}
            </p>
            <p>
                <span className="order-item__data-description">
                    {createDescription(
                        intl.formatMessage({
                            id: "common.email",
                        })
                    )}
                </span>
                {email}
            </p>
        </div>
    );
};
