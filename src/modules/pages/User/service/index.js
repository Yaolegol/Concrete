// @flow
import { request } from "app/service";

export const getUser = () => {
    return request({ url: "http://localhost:8000/user" });
};
