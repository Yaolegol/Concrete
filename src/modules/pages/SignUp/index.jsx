// @flow
import { FormField } from "common/components/FormField";
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
                        <FormField withMargin={false}>
                            <Input placeholder="Email" type="email" />
                        </FormField>
                        <FormField>
                            <Input placeholder="Password" type="password" />
                        </FormField>
                        <FormField>
                            <Input
                                placeholder="Confirm password"
                                type="password"
                            />
                        </FormField>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default SignUp;
