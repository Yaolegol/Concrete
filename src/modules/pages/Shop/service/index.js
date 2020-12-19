// @flow
import { request } from "app/common/service";

export const getProducts = () => {
    return request({ url: "http://localhost:8000/products" });
};
