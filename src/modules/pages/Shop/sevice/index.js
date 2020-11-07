// @flow
import { request } from 'app/service'

export const getProducts = () => {
    return request({ url: 'http://localhost:8000/products' })
}
