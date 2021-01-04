// @flow
import { request } from "app/service";

export const getUser = () => {
    return request({
        isPrivate: true,
        options: {
            headers: {
                "Content-Type": "application/json",
            },
            method: "GET",
        },
        url: "http://localhost:8000/user",
    });
};
