// @flow
import { Button } from "common/components/Button";
import { FormField } from "common/components/FormField";
import { Input } from "common/components/Input";
import { Layout } from "common/components/Layout";
import { actionLogin, actionRegistration } from "modules/Auth/actions";
import { actionHideMobileMenu } from "modules/MobileMenu/actions";
import { actionGetUser } from "modules/User/actions";
import { Formik } from "formik";
import React, { useEffect } from "react";
import { FormattedMessage } from "react-intl";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "./index.less";

const SignUp = (): React$Node => {
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch(actionHideMobileMenu());
    }, [dispatch]);

    return (
        <Layout withFooter={false}>
            <div className="signup-page">
                <div className="signup-page__content-container">
                    <h1 className="signup-page__title">
                        <FormattedMessage id="signup.title" />
                    </h1>
                    <div className="signup-page__form">
                        <Formik
                            initialValues={{
                                email: "",
                                password: "",
                                passwordConfirm: "",
                            }}
                            onSubmit={(values, { setFieldError }) => {
                                dispatch(
                                    actionRegistration({ data: values })
                                ).then(({ errors }) => {
                                    if (!errors) {
                                        dispatch(
                                            actionLogin({ data: values })
                                        ).then(({ errors }) => {
                                            if (!errors) {
                                                dispatch(actionGetUser());
                                                history.push("/");
                                            }
                                        });
                                    } else {
                                        errors.forEach(({ key, message }) => {
                                            setFieldError(key, message);
                                        });
                                    }
                                });
                            }}
                            validate={(values) => {
                                const {
                                    email,
                                    password,
                                    passwordConfirm,
                                } = values;
                                const errors = {};
                                if (!email) {
                                    errors.email = "Required";
                                }
                                if (!password) {
                                    errors.password = "Required";
                                }
                                if (!passwordConfirm) {
                                    errors.passwordConfirm = "Required";
                                }
                                if (passwordConfirm !== password) {
                                    errors.passwordConfirm =
                                        "Not match with password";
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
                                    <form onSubmit={handleSubmit}>
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
                                        <FormField
                                            errorMessage={errors.password}
                                            isError={errors.password}
                                            isTouched={touched.password}
                                        >
                                            <Input
                                                name="password"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                placeholder="Password"
                                                type="password"
                                                value={values.password}
                                            />
                                        </FormField>
                                        <FormField
                                            errorMessage={
                                                errors.passwordConfirm
                                            }
                                            isError={errors.passwordConfirm}
                                            isTouched={touched.passwordConfirm}
                                        >
                                            <Input
                                                name="passwordConfirm"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                placeholder="Confirm password"
                                                type="password"
                                                value={values.passwordConfirm}
                                            />
                                        </FormField>
                                        <div className="signup-page__submit-button-container">
                                            <Button
                                                disabled={!isValid || !dirty}
                                                theme="white"
                                                type="submit"
                                            >
                                                <FormattedMessage id="signup.signupButton" />
                                            </Button>
                                        </div>
                                    </form>
                                );
                            }}
                        </Formik>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default SignUp;
