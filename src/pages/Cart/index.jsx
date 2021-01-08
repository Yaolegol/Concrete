// @flow
import { Button } from "common/components/Button";
import { FormField } from "common/components/FormField";
import { Input } from "common/components/Input";
import { Layout } from "common/components/Layout";
import { OrderHeader } from "common/components/Order/OrderHeader";
import { OrderItem } from "common/components/Order/OrderItem";
import { selectUser } from "modules/User/selectors";
import { actionBuyProducts, actionResetCart } from "modules/Cart/actions";
import { selectCartProductsData } from "modules/Cart/selectors";
import type { TCartProductsData } from "modules/Cart/types";
import { actionHideMobileMenu } from "modules/MobileMenu/actions";
import { CartEmpty } from "pages/Cart/components/CartEmpty";
import { Formik } from "formik";
import React, { useCallback, useEffect, useMemo } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import "./index.less";

type TProps = {
    cartProductsData: TCartProductsData,
    dispatch: any,
    user: any,
};

const CartPage = ({ cartProductsData, dispatch, user }: TProps): React$Node => {
    const history = useHistory();

    const contentItems = useMemo(() => {
        return cartProductsData.map(
            ({
                countInCart,
                description,
                _id,
                images,
                price,
                title,
                totalPrice,
            }) => {
                return (
                    <OrderItem
                        countInCart={countInCart}
                        description={description}
                        key={_id}
                        price={price}
                        src={images[0]}
                        title={title}
                        totalPrice={totalPrice}
                    />
                );
            }
        );
    }, [cartProductsData]);

    const empty = useMemo(() => {
        return (
            <div className="cart-page__empty-container">
                <CartEmpty />
            </div>
        );
    }, []);

    const handleBuy = useCallback(
        ({ email }) => {
            const purchase = cartProductsData.map(
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
        [cartProductsData, dispatch, history, user]
    );

    const content = useMemo(() => {
        return contentItems.length ? (
            <>
                <div className="cart-page__content-section">
                    <OrderHeader />
                    <div className="cart-page__content-container">
                        {contentItems}
                    </div>
                </div>
                {user ? (
                    <div className="cart-page__buy-section">
                        <Button onClick={handleBuy}>
                            <FormattedMessage id="common.buy" />
                        </Button>
                    </div>
                ) : (
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
                                    handleBuy({ email: values.email });
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
                                                    disabled={
                                                        !isValid || !dirty
                                                    }
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
                )}
            </>
        ) : (
            empty
        );
    }, [contentItems, empty, handleBuy, user]);

    useEffect(() => {
        dispatch(actionHideMobileMenu());
    }, [dispatch]);

    return (
        <Layout>
            <div className="cart-page">
                <h1 className="cart-page__title">
                    <FormattedMessage id="cart.title" />
                </h1>
                {content}
            </div>
        </Layout>
    );
};

export default (connect((state) => ({
    cartProductsData: selectCartProductsData(state),
    user: selectUser(state),
}))(CartPage): any);
