// @flow
import { selectCartProductsItems } from "modules/Cart/selectors";
import { ProductCard } from "modules/Shop/components/ProductCard";
import { selectProducts } from "modules/Shop/selectors";
import React, { useMemo } from "react";
import { connect } from "react-redux";
import "./index.less";

type TProps = {
    cartProducts: any,
    products: any,
};

const ProductsBlock = ({ cartProducts, products }: TProps): React$Node => {
    const productCards = useMemo(() => {
        return products.list.map(
            ({ description, _id, images, price, title }) => {
                const { count } = cartProducts[_id] || {};
                const initialCount = count || 0;

                return (
                    <div className="shop-page__product-container" key={_id}>
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

    return <div className="shop-page__products-block">{productCards}</div>;
};

export default connect<TProps, void, _, _, _, _>((state) => ({
    cartProducts: selectCartProductsItems(state),
    products: selectProducts(state),
}))(ProductsBlock);
