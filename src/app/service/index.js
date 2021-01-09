// @flow
import { logError } from "common/helpers/errors";

let requestHost = "";

if (process.env.NODE_ENV === "development") {
    requestHost = "http://localhost:8000";
}

type TProps = {
    formData?: any,
    isPrivate?: boolean,
    options?: any,
    toJSON?: boolean,
    url: string,
};

export const request = async ({
    formData,
    isPrivate,
    options = {},
    toJSON = true,
    url,
}: TProps): any => {
    let headers = {};
    let _options = { ...options };

    if (options.headers) {
        headers = {
            ...options.headers,
        };
    }

    if (isPrivate) {
        const token = localStorage.getItem("token");
        if (!token) {
            console.info("---Token not found");
            return;
        }
        headers = {
            ...headers,
            Authorization: `Bearer ${token}`,
        };
    }
    const fd = new FormData();

    if (formData) {
        Object.keys(formData).forEach((name) => {
            const value = formData[name];
            if (value instanceof FileList) {
                [...value].forEach((file) => {
                    fd.append(file.name, file, file.name);
                });
            } else {
                fd.append(name, value);
            }
        });

        _options = {
            ..._options,
            body: fd,
        };
    }

    try {
        const response = await fetch(`${requestHost}${url}`, {
            ..._options,
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
