// @flow
import { actionGetUser } from "modules/User/actions";
import { ProductsList } from "modules/User/components/ProductsList";
import { selectUserPurchases } from "modules/User/selectors";
import { usePageScrollUp } from "hooks/scroll";
import React, { useEffect, useMemo } from "react";
import { FormattedMessage } from "react-intl";
import { useDispatch, useSelector } from "react-redux";
import "./index.less";

const ProfilePage = (): React$Node => {
    usePageScrollUp();
    const dispatch = useDispatch();
    const userPurchases = useSelector(selectUserPurchases);

    const productsList = useMemo(() => {
        return userPurchases.flat();
    }, [userPurchases]);

    useEffect(() => {
        dispatch(actionGetUser());
    }, [dispatch]);

    return (
        <div className="profile-page">
            <h1 className="profile-page__title">
                <FormattedMessage id="profile.title" />
            </h1>
            <h4 className="profile-page__orders-history-title">
                <FormattedMessage id="profile.ordersHistory" />
            </h4>
            <div className="profile-page__products-container">
                <ProductsList dataList={productsList} />
            </div>
        </div>
    );
};

export default ProfilePage;
