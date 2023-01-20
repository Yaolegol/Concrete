// @flow
import { selectOrders } from "modules/Admin/selectors";
import { ProductCard } from "modules/Cart/components/ProductCard";
import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import "./index.less";

export const ProductsList = (): React$Node => {
    const orders = useSelector(selectOrders);

    const products = useMemo(() => {
        return orders.map(({ email, purchase }) => {
            return purchase.map(({ _id, count, productID, price, sum }) => {
                const { images = [], title } = productID || {};
                return (
                    <div
                        className="modules-admin-components-products-list__item"
                        key={_id}
                    >
                        <ProductCard
                            count={count}
                            email={email}
                            price={price}
                            src={images[0]}
                            title={title}
                            totalPrice={sum}
                        />
                    </div>
                );
            });
        });
    }, [orders]);

    return (
        <div className="modules-admin-components-products-list">{products}</div>
    );
};
