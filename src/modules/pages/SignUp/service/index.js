// @flow
import { request } from "app/service";

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
