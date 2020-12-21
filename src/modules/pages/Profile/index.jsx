// @flow
import { actionGetUser } from "common/actions";
import { Layout } from "common/components/Layout";
import { OrderHeader } from "common/components/Order/OrderHeader";
import { OrderItem } from "common/components/Order/OrderItem";
import { selectUserOrders } from "common/selectors";
import { CartEmpty } from "../Cart/components/CartEmpty";
import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./index.less";

export const ProfilePage = () => {
    const dispatch = useDispatch();
    const cartProductsData = useSelector(selectUserOrders);

    console.log("cartProductsData");
    console.log(cartProductsData);

    const contentItems = useMemo(() => {
        return cartProductsData.map(
            ({
                countInCart,
                description,
                _id,
                images,
                price,
                title,
                totalPrice,
            }) => {
                return (
                    <OrderItem
                        countInCart={countInCart}
                        description={description}
                        key={_id}
                        price={price}
                        src={""}
                        title={title}
                        totalPrice={totalPrice}
                    />
                );
            }
        );
    }, [cartProductsData]);

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
                <h4 className="profile-page__orders-title">Your orders</h4>
                {content}
            </div>
        </Layout>
    );
};
