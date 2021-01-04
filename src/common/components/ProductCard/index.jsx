// @flow
import { ProductCardCounter } from "common/components/ProductCard/ProductCardCounter";
import {
    actionDecCartProductsCount,
    actionIncCartProductsCount,
} from "modules/Cart/actions";
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
            <img
                className="product-card__image"
                src={imageUrl}
                alt={imageAlt}
            />
            <h6 className="product-card__title">{title}</h6>
            <p className="product-card__description">{description}</p>
            <p className="product-card__price">{price}</p>
            <div className="product-card__counter-container">
                <ProductCardCounter
                    count={count}
                    onDecrement={onDecrement}
                    onIncrement={onIncrement}
                />
            </div>
        </div>
    );
};
