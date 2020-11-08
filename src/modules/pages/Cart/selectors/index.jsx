// @flow
import { createSelector } from 'reselect'
import { selectProductsList } from 'pages/Shop/selectors'

const getCartState = (state) => {
    return state.cart
}

export const selectCartProducts = createSelector(
    [getCartState],
    ({ products }) => products
)

export const selectCartProductsItems = createSelector(
    [selectCartProducts],
    ({ items }) => items
)

export const selectCartProductsTotal = createSelector(
    [selectCartProducts],
    ({ total }) => total
)

export const selectCartProductsData = createSelector(
    [selectCartProductsItems, selectProductsList],
    (items, products) => {
        const idsArray = Object.keys(items)
        const selectedProducts = products.filter(({ _id }) => idsArray.includes(_id))
        return selectedProducts.map((product) => {
            const { _id, price } = product
            const countInCart = items[_id].count
            const totalPrice = countInCart * price

            return {
                ...product,
                countInCart,
                totalPrice
            }
        })
    }
)
