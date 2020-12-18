// @flow
import { createSelector } from "reselect";

const getUserState = (state) => {
    return state.user;
};

export const selectUser = createSelector([getUserState], (user) => user);
