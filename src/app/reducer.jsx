import { layoutReducer } from 'layout/reducer'
import { combineReducers } from 'redux'

export const rootReducer = combineReducers({ layout: layoutReducer })
