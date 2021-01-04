// @flow
import { request } from "app/service";

export const getProducts = ({ filters }) => {
    return request({
        options: {
            body: JSON.stringify({ filters }),
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
        },
        url: "http://localhost:8000/products",
    });
};
