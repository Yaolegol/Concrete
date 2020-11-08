import { commonReducer } from 'common/reducer'
import { shopReducer } from 'pages/Shop/reducer'
import { combineReducers } from 'redux'

export const rootReducer = combineReducers({
    common: commonReducer,
    shop: shopReducer
})
