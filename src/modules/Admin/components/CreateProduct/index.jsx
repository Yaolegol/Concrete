// @flow
import { Button } from "common/components/Button";
import { Checkbox } from "common/components/Checkbox";
import { FileInput } from "common/components/FileInput";
import { FormField } from "common/components/FormField";
import { Input } from "common/components/Input";
import { actionAdminCreateProduct } from "modules/Admin/actions";
import { Formik } from "formik";
import React, { useCallback, useState } from "react";
import { FormattedMessage } from "react-intl";
import { useDispatch } from "react-redux";
import "./index.less";

export const CreateProduct = (): React$Node => {
    const dispatch = useDispatch();
    const [fileInputValue, setFileInputValue] = useState("");

    const handleFileInputChange = useCallback(
        ({ handler, name }) => (e) => {
            handler(name, e.target.files);
            setFileInputValue(e.target.value);
        },
        []
    );

    return (
        <div className="admin-page-create-product">
            <h4 className="admin-page-create-product__title">
                <FormattedMessage id="common.createProduct" />
            </h4>
            <div className="admin-page-create-product__content-container">
                <Formik
                    initialValues={{
                        availability: true,
                        description: "",
                        images: "",
                        price: "",
                        title: "",
                    }}
                    onSubmit={(values, { resetForm }) => {
                        dispatch(
                            actionAdminCreateProduct({ productData: values })
                        );

                        resetForm();
                        setFileInputValue("");
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
                        setFieldValue,
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
                                        placeholder={
                                            <FormattedMessage id="common.title" />
                                        }
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
                                        placeholder={
                                            <FormattedMessage id="common.description" />
                                        }
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
                                        placeholder={
                                            <FormattedMessage id="common.price" />
                                        }
                                        value={values.price}
                                    />
                                </FormField>
                                <div className="admin-page-create-product__input-container">
                                    <FileInput
                                        onChange={handleFileInputChange({
                                            handler: setFieldValue,
                                            name: "images",
                                        })}
                                        title={
                                            <FormattedMessage id="common.choosePhoto" />
                                        }
                                        value={fileInputValue}
                                    />
                                </div>
                                <div className="admin-page-create-product__input-container">
                                    <Checkbox
                                        checked={values.availability}
                                        name="availability"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.availability}
                                    >
                                        <FormattedMessage id="common.isAvailable" />
                                    </Checkbox>
                                </div>
                                <div className="admin-page-create-product__submit-button-container">
                                    <Button
                                        disabled={!isValid || !dirty}
                                        mobileFull
                                        theme="white"
                                        type="submit"
                                    >
                                        <FormattedMessage id="common.createProduct" />
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
