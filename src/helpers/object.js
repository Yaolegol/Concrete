// @flow
export const isObjectEmpty = (obj: any): boolean => {
    if (!obj) {
        return true;
    }

    return !Object.keys(obj).length;
};
