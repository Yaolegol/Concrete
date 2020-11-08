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
            return {
                ...product,
                countInCart: items[product._id].count
            }
        })
    }
)
