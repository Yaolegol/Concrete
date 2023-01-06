// @flow
import { Button } from "common/components/Button";
import { FormField } from "common/components/FormField";
import { Input } from "common/components/Input";
import { actionBuyProducts, actionResetCart } from "modules/Cart/actions";
import { selectCartProductsData } from "modules/Cart/selectors";
import type { TCartProductsData } from "modules/Cart/types";
import { selectUser } from "modules/User/selectors";
import { Formik } from "formik";
import React, { useCallback } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import "./index.less";

type TProps = {
    cartProductsDataList: TCartProductsData,
    dispatch: any,
    user: any,
};

const BuyForm = ({
    cartProductsDataList,
    dispatch,
    user,
}: TProps): React$Node => {
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

export default connect<TProps, void, _, _, _, _>((state) => ({
    cartProductsDataList: selectCartProductsData(state),
    user: selectUser(state),
}))(BuyForm);
