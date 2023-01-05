// @flow
import { Button } from "common/components/Button";
import { FormField } from "common/components/FormField";
import { Input } from "common/components/Input";
import { Formik } from "formik";
import React from "react";
import { FormattedMessage } from "react-intl";
import "./index.less";

type TProps = {
    onSubmit: (any) => void,
};

export const BuyForm = ({ onSubmit }: TProps): React$Node => {
    return (
        <div className="cart-page__buy-section">
            <h4>
                <FormattedMessage id="common.enterEmail" />
            </h4>
            <div className="cart-page__form-container">
                <Formik
                    initialValues={{
                        email: "",
                    }}
                    onSubmit={(values) => {
                        onSubmit({ email: values.email });
                    }}
                    validate={(values) => {
                        const { email } = values;
                        const errors = {};
                        if (!email) {
                            errors.email = "Required";
                        }
                        return errors;
                    }}
                >
                    {({
                        dirty,
                        errors,
                        handleBlur,
                        handleChange,
                        handleSubmit,
                        isValid,
                        touched,
                        values,
                    }) => {
                        return (
                            <form
                                className="cart-page__form"
                                onSubmit={handleSubmit}
                            >
                                <FormField
                                    errorMessage={errors.email}
                                    isError={errors.email}
                                    isTouched={touched.email}
                                    withMargin={false}
                                >
                                    <Input
                                        name="email"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="Email"
                                        type="email"
                                        value={values.email}
                                    />
                                </FormField>
                                <div className="signup-page__submit-button-container">
                                    <Button
                                        disabled={!isValid || !dirty}
                                        type="submit"
                                    >
                                        <FormattedMessage id="common.buy" />
                                    </Button>
                                </div>
                            </form>
                        );
                    }}
                </Formik>
            </div>
        </div>
    );
};
