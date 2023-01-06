// @flow
import { selectCartProductsItems } from "modules/Cart/selectors";
import { ProductCard } from "modules/Shop/components/ProductCard";
import { selectProducts } from "modules/Shop/selectors";
import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import "./index.less";

export const ProductsBlock = (): React$Node => {
    const cartProducts = useSelector(selectCartProductsItems);
    const products = useSelector(selectProducts);

    const productCards = useMemo(() => {
        return products.list.map(
            ({ description, _id, images, price, title }) => {
                const { count } = cartProducts[_id] || {};
                const initialCount = count || 0;

                return (
                    <div
                        className="main-shop-products-block__product-container"
                        key={_id}
                    >
                        <ProductCard
                            description={description}
                            id={_id}
                            imageUrl={images[0]}
                            initialCount={initialCount}
                            price={price}
                            title={title}
                        />
                    </div>
                );
            }
        );
    }, [cartProducts, products]);

    return (
        <div className="main-shop-products-block__products-block">
            {productCards}
        </div>
    );
};
