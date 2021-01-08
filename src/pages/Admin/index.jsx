// @flow
import { Button } from "common/components/Button";
import { Layout } from "common/components/Layout";
import { CreateProduct } from "modules/Admin/components/CreateProduct";
import { ViewOrders } from "modules/Admin/components/ViewOrders";
import { actionHideMobileMenu } from "modules/MobileMenu/actions";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import "./index.less";

const AdminPage = (): React$Node => {
    const dispatch = useDispatch();

    const [currentContent, setCurrentContent] = useState("create product");

    const changeContent = useCallback(
        (value) => () => {
            setCurrentContent(value);
        },
        []
    );

    const content = useMemo(() => {
        switch (currentContent) {
            case "create product":
                return <CreateProduct />;
            case "view orders":
                return <ViewOrders />;
            default:
                return null;
        }
    }, [currentContent]);

    useEffect(() => {
        dispatch(actionHideMobileMenu());
    }, [dispatch]);

    return (
        <Layout withFooter={false}>
            <div className="admin-page">
                <h1>Dashboard</h1>
                <div className="admin-page__main-section">
                    <div className="admin-page__controls-section">
                        <h4>Menu</h4>
                        <div className="admin-page__controls-container">
                            <div className="admin-page__control">
                                <Button
                                    fullWidth
                                    onClick={changeContent("create product")}
                                    theme="white"
                                >
                                    Create product
                                </Button>
                            </div>
                            <div className="admin-page__control">
                                <Button
                                    fullWidth
                                    onClick={changeContent("view orders")}
                                    theme="white"
                                >
                                    View orders
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="admin-page__content-section">{content}</div>
                </div>
            </div>
        </Layout>
    );
};

export default AdminPage;
