// @flow
import { Layout } from "common/components/Layout";
import { OrderHeader } from "common/components/Order/OrderHeader";
import { OrderItem } from "common/components/Order/OrderItem";
import { CartEmpty } from "modules/Cart/components/CartEmpty";
import { actionGetUser } from "modules/User/actions";
import { selectUserPurchases } from "modules/User/selectors";
import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./index.less";

export const ProfilePage = () => {
    const dispatch = useDispatch();
    const userPurchases = useSelector(selectUserPurchases);

    const contentItems = useMemo(() => {
        return userPurchases.map((purchase) => {
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
    }, [userPurchases]);

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
        dispatch(actionGetUser());
    }, [dispatch]);

    return (
        <Layout>
            <div className="profile-page">
                <h1 className="profile-page__title">Profile</h1>
                <h4 className="profile-page__orders-history-title">
                    Orders history
                </h4>
                {content}
            </div>
        </Layout>
    );
};
