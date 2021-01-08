// @flow
import { Layout } from "common/components/Layout";
import { OrderHeader } from "common/components/Order/OrderHeader";
import { OrderItem } from "common/components/Order/OrderItem";
import { actionHideMobileMenu } from "modules/MobileMenu/actions";
import { actionGetUser } from "modules/User/actions";
import { selectUserPurchases } from "modules/User/selectors";
import React, { useEffect, useMemo } from "react";
import { FormattedMessage } from "react-intl";
import { useDispatch, useSelector } from "react-redux";
import "./index.less";

const ProfilePage = (): React$Node => {
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
        dispatch(actionHideMobileMenu());
        dispatch(actionGetUser());
    }, [dispatch]);

    return (
        <Layout>
            <div className="profile-page">
                <h1 className="profile-page__title">
                    <FormattedMessage id="profile.title" />
                </h1>
                <h4 className="profile-page__orders-history-title">
                    <FormattedMessage id="profile.ordersHistory" />
                </h4>
                {content}
            </div>
        </Layout>
    );
};

export default ProfilePage;
