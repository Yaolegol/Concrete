// @flow
import { ProductCard } from "modules/Cart/components/ProductCard";
import type { TCartProductsData } from "modules/Cart/types";
import React, { useMemo } from "react";
import "./index.less";

type TProps = {
    dataList: TCartProductsData,
};

export const ProductsList = ({ dataList }: TProps): React$Node => {
    const products = useMemo(() => {
        return dataList.map(
            ({ countInCart, _id, images, price, title, totalPrice }) => {
                return (
                    <div
                        className="modules-cart-components-products-list__item"
                        key={_id}
                    >
                        <ProductCard
                            count={countInCart}
                            price={price}
                            src={images[0]}
                            title={title}
                            totalPrice={totalPrice}
                        />
                    </div>
                );
            }
        );
    }, [dataList]);

    return (
        <div className="modules-cart-components-products-list">{products}</div>
    );
};
