// @flow
import { Button } from "common/components/Button";
import { FormField } from "common/components/FormField";
import { Input } from "common/components/Input";
import { actionBuyProducts, actionResetCart } from "modules/Cart/actions";
import { selectCartProductsData } from "modules/Cart/selectors";
import { selectUser } from "modules/User/selectors";
import { Formik } from "formik";
import React, { useCallback } from "react";
import { FormattedMessage } from "react-intl";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./index.less";

export const BuyForm = (): React$Node => {
    const dispatch = useDispatch();
    const cartProductsDataList = useSelector(selectCartProductsData);
    const user = useSelector(selectUser);
    const history = useHistory();

    const handleSubmit = useCallback(
        ({ email }) => {
            const purchase = cartProductsDataList.map(
                ({ _id, countInCart, price, totalPrice }) => {
                    return {
                        count: countInCart,
                        productID: _id,
                        price,
                        sum: totalPrice,
                    };
                }
            );

            dispatch(
                actionBuyProducts({
                    email: email || user.email,
                    purchase,
                })
            ).then(({ errors }) => {
                if (!errors) {
                    dispatch(actionResetCart());
                    history.push("/");
                }
            });
        },
        [cartProductsDataList, dispatch, history, user]
    );

    return (
        <div className="modules-cart-components-buy-form">
            <h4 className="modules-cart-components-buy-form__title">
                <FormattedMessage id="common.enterEmail" />
            </h4>
            <div className="modules-cart-components-buy-form__form-container">
                <Formik
                    initialValues={{
                        email: user ? user.email : "",
                    }}
                    onSubmit={(values) => {
                        handleSubmit({ email: values.email });
                    }}
                    validate={(values) => {
                        const { email } = values;
                        const errors = {};
                        if (!email) {
                            errors.email = "Required";
                        }
                        return errors;
                    }}
                    validateOnMount
                >
                    {({
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
                                className="modules-cart-components-buy-form__form"
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
                                <div className="modules-cart-components-buy-form__submit-button-container">
                                    <Button disabled={!isValid} type="submit">
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
