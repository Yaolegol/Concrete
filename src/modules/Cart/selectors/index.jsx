// @flow
import { createSelector } from "reselect";
import { selectProductsList } from "modules/Shop/selectors";

const getCartState = (state) => {
    return state.cart;
};

export const selectCartProducts: any = createSelector(
    [getCartState],
    ({ products }) => products
);

export const selectCartProductsItems: any = createSelector(
    [selectCartProducts],
    ({ items }) => items
);

export const selectCartProductsTotal: any = createSelector(
    [selectCartProducts],
    ({ total }) => total
);

export const selectCartProductsData: any = createSelector(
    [selectCartProductsItems, selectProductsList],
    (items, products) => {
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
    }
);
