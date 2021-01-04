// @flow
import { Layout } from "common/components/Layout";
import { actionGetUser } from "common/actions";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./index.less";

export const UserPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actionGetUser());
    }, [dispatch]);

    return (
        <Layout>
            <div className="user-page">test</div>
        </Layout>
    );
};
