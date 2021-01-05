// @flow
import { Tab } from "common/components/Tabs/Tab";
import React, { useState, useMemo, useCallback } from "react";
import "./index.less";

type TProps = {
    activeTabId: number,
    content: Array<{
        id: number,
        data: { address: any, email: any, phone: any },
    }>,
    contentComponent: any,
    tabs: Array<{ id: number, name: any }>,
};

export const Tabs = ({
    activeTabId,
    content,
    contentComponent: ContentComponent,
    tabs,
}: TProps): React$Node => {
    const [activeTab, setActiveTab] = useState(activeTabId);

    const onClickTab = useCallback((e) => {
        const { id } = e.target.dataset;
        setActiveTab(Number(id));
    }, []);

    const _content = useMemo(() => {
        return content.map(({ id, data }) => {
            return (
                <ContentComponent
                    {...data}
                    isActive={id === activeTab}
                    key={id}
                />
            );
        });
    }, [activeTab, content]);

    const _tabs = useMemo(() => {
        return tabs.map(({ id, name }) => {
            return (
                <Tab
                    data-id={id}
                    isActive={id === activeTab}
                    key={id}
                    onClick={onClickTab}
                >
                    {name}
                </Tab>
            );
        });
    }, [activeTab, onClickTab, tabs]);

    return (
        <div className="tabs">
            <div className="tabs__menu-container">{_tabs}</div>
            <div className="tabs__content-container">{_content}</div>
        </div>
    );
};
