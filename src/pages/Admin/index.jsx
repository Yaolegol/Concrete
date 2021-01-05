// @flow
import { Button } from "common/components/Button";
import { Layout } from "common/components/Layout";
import React from "react";
import "./index.less";

export const AdminPage = (): React$Node => {
    return (
        <Layout withFooter={false}>
            <div className="admin-page">
                <h1>Dashboard</h1>
                <div className="admin-page__main-section">
                    <div className="admin-page__controls-section">
                        <h4>Menu</h4>
                        <div className="admin-page__control">
                            <Button fullWidth theme="white">
                                Create product
                            </Button>
                        </div>
                        <div className="admin-page__control">
                            <Button fullWidth theme="white">
                                Create category
                            </Button>
                        </div>
                        <div className="admin-page__control">
                            <Button fullWidth theme="white">
                                Create brand
                            </Button>
                        </div>
                        <div className="admin-page__control">
                            <Button fullWidth theme="white">
                                View orders
                            </Button>
                        </div>
                    </div>
                    <div className="admin-page__content-section">
                        test
                    </div>
                </div>
            </div>
        </Layout>
    );
};
