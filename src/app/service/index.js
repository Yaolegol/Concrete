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
    options,
    toJSON = true,
    url,
}: TProps): any => {
    let token;

    try {
        if (isPrivate) {
            token = localStorage.getItem("token");
        }
        const response = await fetch(url, {
            ...options,
            headers: {
                ...options.headers,
                Authorization: `Bearer ${token}`,
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
