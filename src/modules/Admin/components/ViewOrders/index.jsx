// @flow
import { OrderHeader } from "modules/Admin/components/Order/OrderHeader";
import { OrderItem } from "modules/Admin/components/Order/OrderItem";
import { selectOrders } from "modules/Admin/selectors";
import { actionGetPurchases } from "modules/Admin/actions";
import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./index.less";

export const ViewOrders = (): React$Node => {
    const dispatch = useDispatch();
    const orders = useSelector(selectOrders);

    const contentItems = useMemo(() => {
        return orders.map(({ email, purchase }) => {
            return purchase.map(({ _id, count, productID, price, sum }) => {
                const { description, images, title } = productID;
                return (
                    <OrderItem
                        countInCart={count}
                        description={description}
                        email={email}
                        key={_id}
                        price={price}
                        src={images[0]}
                        title={title}
                        totalPrice={sum}
                    />
                );
            });
        });
    }, [orders]);

    const content = useMemo(() => {
        return contentItems.length ? (
            <div className="cart-page__content-section">
                <OrderHeader />
                <div className="cart-page__content-container">
                    {contentItems}
                </div>
            </div>
        ) : null;
    }, [contentItems]);

    useEffect(() => {
        dispatch(actionGetPurchases());
    }, [dispatch]);

    return (
        <div>
            <h4>Orders</h4>
            {content}
        </div>
    );
};
