// @flow
import React from "react";
import "./index.less";

type TProps = {
    count: number,
    price: number,
    src: string,
    title: string,
    totalPrice: number,
};

export const ProductCard = ({
    count,
    price,
    src,
    title,
    totalPrice,
}: TProps): React$Node => {
    return (
        <div className="modules-cart-components-product-card">
            <div className="modules-cart-components-product-card__image-block">
                <div className="modules-cart-components-product-card__image-container">
                    <img
                        alt=""
                        className="modules-cart-components-product-card__image"
                        src={src}
                    />
                </div>
            </div>
            <div className="modules-cart-components-product-card__content-container">
                <div className="modules-cart-components-product-card__content-description">
                    <div className="modules-cart-components-product-card__content-item">
                        <div className="modules-cart-components-product-card__content-item-name">
                            Title:
                        </div>
                        <div className="modules-cart-components-product-card__content-item-value">
                            {title}
                        </div>
                    </div>
                    <div className="modules-cart-components-product-card__content-item">
                        <div className="modules-cart-components-product-card__content-item-name">
                            Price:
                        </div>
                        <div className="modules-cart-components-product-card__content-item-value">
                            {price}
                        </div>
                    </div>
                    <div className="modules-cart-components-product-card__content-item">
                        <div className="modules-cart-components-product-card__content-item-name">
                            Count:
                        </div>
                        <div className="modules-cart-components-product-card__content-item-value">
                            {count}
                        </div>
                    </div>
                </div>
                <div className="modules-cart-components-product-card__content-total">
                    <div className="modules-cart-components-product-card__content-item">
                        <div className="modules-cart-components-product-card__content-item-name modules-cart-components-product-card__content-item-name_bold">
                            Total price:
                        </div>
                        <div className="modules-cart-components-product-card__content-item-value modules-cart-components-product-card__content-item-value_bold">
                            {totalPrice}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
