// @flow
import { request } from "app/service";

export const loginRequest = ({ data }: any): any => {
    return request({
        options: {
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
        },
        url: "http://localhost:8000/login",
    });
};

export const registrationRequest = ({ data }: any): any => {
    return request({
        options: {
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
        },
        url: "http://localhost:8000/registration",
    });
};
