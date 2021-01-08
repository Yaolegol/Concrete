// @flow
import { request } from "app/service";

export const getUser = (): any => {
    return request({
        isPrivate: true,
        options: {
            headers: {
                "Content-Type": "application/json",
            },
            method: "GET",
        },
        url: "/user",
    });
};
