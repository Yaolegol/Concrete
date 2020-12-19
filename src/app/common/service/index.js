// @flow
import { logError } from "common/helpers/errors";

type TProps = {
    isPrivate?: boolean,
    options?: any,
    toJSON?: boolean,
    url: string,
};

export const request = async ({
    isPrivate,
    options = {},
    toJSON = true,
    url,
}: TProps): any => {
    let token;
    let headers = {};

    if (options.headers) {
        headers = {
            ...options.headers,
        };
    }

    try {
        if (isPrivate) {
            token = localStorage.getItem("token");
            if (!token) {
                logError("Token not found", "request");
                return;
            }
            headers = {
                ...headers,
                Authorization: `Bearer ${token}`,
            };
        }
        const response = await fetch(url, {
            ...options,
            headers: {
                ...headers,
            },
        });
        return await handleResponse({ response, toJSON });
    } catch (error) {
        logError(error, "request");
    }
};

const handleResponse = async ({ response, toJSON }) => {
    if (toJSON) {
        try {
            const { status } = response;
            const { data, errors } = await response.json();
            return { data, errors, status };
        } catch (error) {
            logError(error, "handleResponse");
        }
    }
    return { response };
};
