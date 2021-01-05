// @flow
import { Button } from "common/components/Button";
import { Checkbox } from "common/components/Checkbox";
import { FormField } from "common/components/FormField";
import { Input } from "common/components/Input";
import { actionLogin, actionRegistration } from "modules/Auth/actions";
import { actionGetUser } from "modules/User/actions";
import { Formik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import "./index.less";

export const CreateProduct = (): React$Node => {
    const dispatch = useDispatch();

    return (
        <div className="admin-page-create-product">
            <h4>Create product</h4>
            <div className="admin-page-create-product__content-container">
                <Formik
                    initialValues={{
                        available: true,
                        description: "",
                        images: "",
                        price: "",
                        title: "",
                    }}
                    onSubmit={(values, { setFieldError }) => {
                        dispatch(actionRegistration({ data: values })).then(
                            ({ errors }) => {
                                if (!errors) {
                                    dispatch(
                                        actionLogin({ data: values })
                                    ).then(({ errors }) => {
                                        if (!errors) {
                                            dispatch(actionGetUser());
                                        }
                                    });
                                } else {
                                    errors.forEach(({ key, message }) => {
                                        setFieldError(key, message);
                                    });
                                }
                            }
                        );
                    }}
                    validate={(values) => {
                        const { price, title } = values;
                        const errors = {};
                        if (!title) {
                            errors.title = "Required";
                        }
                        if (!price) {
                            errors.price = "Required";
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
                                    errorMessage={errors.title}
                                    isError={errors.title}
                                    isTouched={touched.title}
                                    withMargin={false}
                                >
                                    <Input
                                        name="title"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="Title"
                                        value={values.title}
                                    />
                                </FormField>
                                <FormField
                                    errorMessage={errors.description}
                                    isError={errors.description}
                                    isTouched={touched.description}
                                >
                                    <Input
                                        name="description"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="Description"
                                        value={values.description}
                                    />
                                </FormField>
                                <FormField
                                    errorMessage={errors.price}
                                    isError={errors.price}
                                    isTouched={touched.price}
                                >
                                    <Input
                                        isNumber
                                        name="price"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="Price"
                                        value={values.price}
                                    />
                                </FormField>
                                <Checkbox
                                    checked={values.available}
                                    name="available"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.available}
                                >
                                    Is available
                                </Checkbox>
                                <div className="signup-page__submit-button-container">
                                    <Button
                                        disabled={!isValid || !dirty}
                                        theme="white"
                                        type="submit"
                                    >
                                        Sign Up
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
