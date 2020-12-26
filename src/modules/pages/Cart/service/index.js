// @flow
import { request } from "app/common/service";

export const buyProducts = (products) => {
    return request({
        options: {
            body: JSON.stringify(products),
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
        },
        url: "http://localhost:8000/purchase",
    });
};
