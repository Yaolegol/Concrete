// @flow
import { request } from "app/service";

export const adminCreateProduct = ({ productData }: any): any => {
    return request({
        formData: productData,
        isPrivate: true,
        options: {
            method: "POST",
        },
        url: "http://localhost:8000/admin/create-product",
    });
};
