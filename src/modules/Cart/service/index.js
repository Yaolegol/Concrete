// @flow
import { request } from "app/service";

export const buyProducts = (products: any): any => {
    return request({
        options: {
            body: JSON.stringify(products),
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
        },
        url: "/purchase",
    });
};
