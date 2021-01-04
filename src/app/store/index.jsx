// @flow
import { rootReducer } from "app/reducer";
import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";

const middlewares = [thunk];
const reduxDevTools =
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__();

export const store = (createStore(
    rootReducer,
    {},
    compose(applyMiddleware(...middlewares), reduxDevTools)
): any);
