// @flow
const getAdminState = ({ admin }) => admin;

export const selectOrders: any = (state) => {
    const admin = getAdminState(state);

    return admin.purchases;
};
