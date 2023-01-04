// @flow
import {
    actionDecCartProductsCount,
    actionIncCartProductsCount,
} from "modules/Cart/actions";
import { ProductCardCounter } from "modules/Shop/components/ProductCard/ProductCardCounter";
import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import "./index.less";

type TProps = {
    description: string,
    id: number,
    imageAlt?: string,
    imageUrl: string,
    initialCount?: number,
    price: string,
    title: string,
};

export const ProductCard = ({
    description,
    id,
    imageAlt = "",
    imageUrl,
    initialCount = 0,
    price,
    title,
}: TProps): React$Node => {
    const [count, setCount] = useState(initialCount);
    const dispatch = useDispatch();

    const onDecrement = useCallback(() => {
        if (count > 0) {
            setCount(count - 1);
        }
        dispatch(actionDecCartProductsCount(id));
    }, [count, dispatch, id]);

    const onIncrement = useCallback(() => {
        setCount(count + 1);
        dispatch(actionIncCartProductsCount(id));
    }, [count, dispatch, id]);

    return (
        <div className="product-card">
            <div className="product-card__image-container">
                <img
                    alt={imageAlt}
                    className="product-card__image"
                    src={imageUrl}
                />
            </div>
            <div className="product-card__content-block">
                <div className="product-card__title">{title}</div>
                <div className="product-card__description">{description}</div>
                <div className="product-card__price-container">
                    <div>Price:</div>
                    <div className="product-card__price">{price}</div>
                </div>
                <div className="product-card__counter-container">
                    <ProductCardCounter
                        count={count}
                        onDecrement={onDecrement}
                        onIncrement={onIncrement}
                    />
                </div>
            </div>
        </div>
    );
};
