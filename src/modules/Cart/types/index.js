// @flow
export type TCartProductsItem = {
    avalibility: boolean,
    brand: string,
    category: string,
    countInCart: number,
    description: string,
    images: Array<string>,
    price: number,
    title: string,
    totalPrice: number,
    __v: boolean,
    _id: string,
}

export type TCartProductsData = Array<TCartProductsItem>
