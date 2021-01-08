// @flow
import { request } from "app/service";

export const getProducts = ({ filters, page, sort }: any): any => {
    return request({
        options: {
            body: JSON.stringify({ filters, page, sort }),
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
        },
        url: "/products",
    });
};
