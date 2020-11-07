// @flow
type TProps = {
    data?: any,
    method?: string,
    options?: any,
    url: string
}

export const request = ({ data = {}, method = 'GET', options = {}, url }: TProps): any => {
    fetch(url, {
        ...options
    })
        .then((data) => {
            console.log('request data')
            console.log(data)
        })
        .catch((error) => {
            console.error(error)
        })
}
