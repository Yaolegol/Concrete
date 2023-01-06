// @flow
const getAdminState = (state) => {
    return state.admin;
};

export const selectOrders: any = (state) => {
    const admin = getAdminState(state);

    return admin.purchases;
};
