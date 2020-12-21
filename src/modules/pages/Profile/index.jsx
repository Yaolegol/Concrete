// @flow
import { actionGetUser } from "common/actions";
import { Layout } from "common/components/Layout";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./index.less";

export const ProfilePage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actionGetUser());
    }, [dispatch]);

    return (
        <Layout>
            <div>profile</div>
        </Layout>
    );
};
