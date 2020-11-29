// @flow
import { FormField } from "common/components/FormField";
import { Input } from "common/components/Input";
import { Layout } from "common/components/Layout";
import React from "react";
import "./index.less";

const LogIn = (): React$Node => {
    return (
        <Layout withFooter={false}>
            <div className="login-page">
                <div className="login-page__content-container">
                    <h1>Log In</h1>
                    <div className="login-page__form">
                        <FormField withMargin={false}>
                            <Input placeholder="Email" type="email" />
                        </FormField>
                        <FormField>
                            <Input placeholder="Password" type="password" />
                        </FormField>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default LogIn;
