// @flow
import cn from "classnames";
import { AdminLinks } from "modules/Layout/Menu/Links/Admin";
import { RegisterLinks } from "modules/Layout/Menu/Links/Register";
import { UnregisterLinks } from "modules/Layout/Menu/Links/Unregister";
import { PagesLinks } from "modules/Layout/Menu/Links/Pages";
import { selectUser } from "modules/User/selectors";
import React from "react";
import { useSelector } from "react-redux";
import "./index.less";

type TProps = {
    column?: boolean,
    onSelect?: () => void,
};

export const Menu = ({ column, onSelect }: TProps): React$Node => {
    const user = useSelector(selectUser);

    return (
        <div className={cn("menu", column ? "menu_column" : "")}>
            <PagesLinks onSelect={onSelect} />
            {user && user.admin ? <AdminLinks onSelect={onSelect} /> : null}
            {user ? (
                <RegisterLinks onSelect={onSelect} />
            ) : (
                <UnregisterLinks onSelect={onSelect} />
            )}
        </div>
    );
};
