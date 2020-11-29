// @flow
import { Input } from "common/components/Input";
import { Layout } from "common/components/Layout";
import React from "react";
import "./index.less";

const SignUp = (): React$Node => {
    return (
        <Layout withFooter={false}>
            <div className="signup-page">
                <div className="signup-page__content-container">
                    <h1>Sign Up</h1>
                    <div className="signup-page__form">
                        <Input />
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default SignUp;
