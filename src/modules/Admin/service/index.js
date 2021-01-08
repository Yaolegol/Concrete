// @flow
import { request } from "app/service";

export const adminCreateProduct = ({ productData }: any): any => {
    return request({
        formData: productData,
        isPrivate: true,
        options: {
            method: "POST",
        },
        url: "/admin/create-product",
    });
};

export const adminGetPurchases = (): any => {
    return request({
        isPrivate: true,
        url: "/admin/get-purchases",
    });
};
