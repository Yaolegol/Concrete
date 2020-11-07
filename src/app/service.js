// @flow
import { logError } from 'common/helpers/errors'

type TProps = {
    options?: any,
    toJSON?: boolean,
    url: string
}

export const request = async ({ options, toJSON = true, url }: TProps): any => {
    try {
        const response = await fetch(url, {
            ...options
        })
        return await handleResponse({ response, toJSON })
    } catch (error) {
        logError(error, 'request')
    }
}

const handleResponse = async ({ response, toJSON }) => {
    if (toJSON) {
        try {
            const { status } = response
            const { data, errors } = await response.json()
            return { data, errors, status }
        } catch (error) {
            logError(error, 'handleResponse')
        }
    }
    return { response }
}
