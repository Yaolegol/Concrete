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

export const loginRequest = ({ data }) => {
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

export const registrationRequest = ({ data }) => {
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
