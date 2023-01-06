// @flow
import { ProductCard } from "modules/Cart/components/ProductCard";
import { selectCartProductsData } from "modules/Cart/selectors";
import type { TCartProductsData } from "modules/Cart/types";
import React, { useMemo } from "react";
import { connect } from "react-redux";
import "./index.less";

type TProps = {
    cartProductsDataList: TCartProductsData,
};

const ProductsList = ({ cartProductsDataList }: TProps): React$Node => {
    const products = useMemo(() => {
        return cartProductsDataList.map(
            ({ countInCart, _id, images, price, title, totalPrice }) => {
                return (
                    <div
                        className="modules-cart-components-products-list__item"
                        key={_id}
                    >
                        <ProductCard
                            countInCart={countInCart}
                            price={price}
                            src={images[0]}
                            title={title}
                            totalPrice={totalPrice}
                        />
                    </div>
                );
            }
        );
    }, [cartProductsDataList]);

    return (
        <div className="modules-cart-components-products-list">{products}</div>
    );
};

export default connect<TProps, void, _, _, _, _>((state) => ({
    cartProductsDataList: selectCartProductsData(state),
}))(ProductsList);
