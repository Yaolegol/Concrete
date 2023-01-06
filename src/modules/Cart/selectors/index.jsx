// @flow
import { selectProductsList } from "modules/Shop/selectors";

export const selectCartState: any = ({ cart }) => cart;

export const selectCartProducts: any = (state) => {
    const cart = selectCartState(state);

    return cart.products;
};

export const selectCartProductsItems: any = (state) => {
    const products = selectCartProducts(state);

    return products.items;
};

export const selectCartProductsTotal: any = (state) => {
    const products = selectCartProducts(state);

    return products.total;
};

export const selectCartProductsData: any = (state) => {
    const items = selectCartProductsItems(state);
    const products = selectProductsList(state);

    const buyingItemsId = Object.keys(items).filter((key) => {
        return items[key].count > 0;
    });
    const buyingProducts = products.filter(({ _id }) =>
        buyingItemsId.includes(_id)
    );

    return buyingProducts.map((product) => {
        const { _id, price } = product;
        const countInCart = items[_id].count;
        const totalPrice = countInCart * price;

        return {
            ...product,
            countInCart,
            totalPrice,
        };
    });
};
