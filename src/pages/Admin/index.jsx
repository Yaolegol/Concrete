// @flow
import { Button } from "common/components/Button";
import { Layout } from "common/components/Layout";
import { CreateProduct } from "pages/Admin/components/CreateProduct";
import { ViewOrders } from "pages/Admin/components/ViewOrders";
import React, { useCallback, useMemo, useState } from "react";
import "./index.less";

export const AdminPage = (): React$Node => {
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
