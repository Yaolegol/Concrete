// @flow
import { usePageScrollUp } from "hooks/scroll";
import { Button } from "common/components/Button";
import { CreateProduct } from "modules/Admin/components/CreateProduct";
import { ViewOrders } from "modules/Admin/components/ViewOrders";
import React, { useCallback, useMemo, useState } from "react";
import { FormattedMessage } from "react-intl";
import "./index.less";

const Admin = (): React$Node => {
    usePageScrollUp();
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
        <div className="admin-page">
            <h1 className="admin-page__title">
                <FormattedMessage id="common.menu.adminDashboard" />
            </h1>
            <div className="admin-page__content-area">
                <div className="admin-page__section-controls">
                    <h4 className="admin-page__section-controls-title">
                        <FormattedMessage id="common.menu.title" />
                    </h4>
                    <div className="admin-page__controls-container">
                        <div className="admin-page__control">
                            <Button
                                active={currentContent === "create product"}
                                fullWidth
                                onClick={changeContent("create product")}
                                theme="white"
                            >
                                <FormattedMessage id="common.createProduct" />
                            </Button>
                        </div>
                        <div className="admin-page__control">
                            <Button
                                active={currentContent === "view orders"}
                                fullWidth
                                onClick={changeContent("view orders")}
                                theme="white"
                            >
                                <FormattedMessage id="common.menu.viewOrders" />
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="admin-page__section-content">{content}</div>
            </div>
        </div>
    );
};

export default Admin;
