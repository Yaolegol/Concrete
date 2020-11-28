// @flow
import { store } from "app/store";
import React from "react";
import { Provider } from "react-redux";

type TProps = {
    children: React$Node,
};

export const CustomProvider = ({ children }: TProps): React$Node => {
    return <Provider store={store}>{children}</Provider>;
};
