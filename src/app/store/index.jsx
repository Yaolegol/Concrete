// @flow
import { rootReducer } from "app/reducer";
import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";

const middlewares = [thunk];
const reduxDevTools =
    process.env.NODE_ENV === "development" &&
    window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : null;

const composes = reduxDevTools
    ? [applyMiddleware(...middlewares), reduxDevTools]
    : [applyMiddleware(...middlewares)];

export const store = (createStore(rootReducer, {}, compose(...composes)): any);
