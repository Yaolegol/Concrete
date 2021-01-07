// @flow
import { OrderHeader } from "common/components/Order/OrderHeader";
import { OrderItem } from "common/components/Order/OrderItem";
import { selectOrders } from "modules/Admin/selectors";
import { actionGetPurchases } from "modules/Admin/actions";
import { CartEmpty } from "pages/Cart/components/CartEmpty";
import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./index.less";

export const ViewOrders = (): React$Node => {
    const dispatch = useDispatch();
    const orders = useSelector(selectOrders);

    const contentItems = useMemo(() => {
        return orders.map(({email, purchase}) => {
            return purchase.map(({ _id, count, productID, price, sum }) => {
                const { description, images, title } = productID;
                return (
                    <OrderItem
                        countInCart={count}
                        description={description}
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

    const empty = useMemo(() => {
        return <CartEmpty />;
    }, []);

    const content = useMemo(() => {
        return contentItems.length ? (
            <div className="cart-page__content-section">
                <OrderHeader />
                <div className="cart-page__content-container">
                    {contentItems}
                </div>
            </div>
        ) : (
            empty
        );
    }, [contentItems, empty]);

    useEffect(() => {
        dispatch(actionGetPurchases());
    }, [dispatch]);

    return (
        <div className="profile-page">
            <h4 className="profile-page__orders-history-title">Orders</h4>
            {content}
        </div>
    );
};
