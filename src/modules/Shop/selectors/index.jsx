// @flow
export const getShopState: any = ({ cart }) => cart.shop;

export const selectProducts: any = (state) => {
    const shop = getShopState(state);

    return shop.products;
};

export const selectProductsFilters: any = (state) => {
    const shop = getShopState(state);

    return shop.filters;
};

export const selectProductsList: any = (state) => {
    const products = selectProducts(state);

    return products.list;
};
