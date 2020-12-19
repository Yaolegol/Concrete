// @flow
export const logError = (error: any, where: string): void => {
    console.info(where);
    console.error(error);
};
