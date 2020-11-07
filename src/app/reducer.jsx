import { layoutReducer } from 'layout/reducer'
import { shopReducer } from 'pages/Shop/reducer'
import { combineReducers } from 'redux'

export const rootReducer = combineReducers({
    layout: layoutReducer,
    shop: shopReducer
})
