// @flow
import { ProductCard } from "modules/Cart/components/ProductCard";
import React, { useMemo } from "react";
import "./index.less";

type TProps = {
    dataList: any,
};

export const ProductsList = ({ dataList }: TProps): React$Node => {
    const products = useMemo(() => {
        return dataList.map(({ _id, count, productID = {}, price, sum }) => {
            const { images = [], title } = productID || {};
            return (
                <div
                    className="modules-user-components-products-list__item"
                    key={_id}
                >
                    <ProductCard
                        count={count}
                        price={price}
                        src={images[0]}
                        title={title}
                        totalPrice={sum}
                    />
                </div>
            );
        });
    }, [dataList]);

    return (
        <div className="modules-user-components-products-list">{products}</div>
    );
};
