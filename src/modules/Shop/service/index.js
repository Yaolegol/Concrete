// @flow
import { request } from "app/service";

export const getProducts = ({ filters, sort }: any): any => {
    return request({
        options: {
            body: JSON.stringify({ filters, sort }),
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
        },
        url: "http://localhost:8000/products",
    });
};
