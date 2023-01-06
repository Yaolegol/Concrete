// @flow
import { actionGetPurchases } from "modules/Admin/actions";
import { ProductsList } from "modules/Admin/components/ProductsList";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./index.less";

export const ViewOrders = (): React$Node => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actionGetPurchases());
    }, [dispatch]);

    return (
        <div className="modules-admin-components-view-orders">
            <h4 className="modules-admin-components-view-orders__title">
                View orders
            </h4>
            <div className="modules-admin-components-view-orders__content">
                <ProductsList />
            </div>
        </div>
    );
};
