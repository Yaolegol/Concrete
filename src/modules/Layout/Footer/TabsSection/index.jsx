// @flow
import { getRandomString } from "helpers/random";
import { TabContentItem } from "modules/Layout/Footer/TabsSection/TabContentItem";
import { Tab } from "modules/Layout/Footer/TabsSection/TabItem";
import React, { useCallback, useMemo, useState } from "react";
import { FormattedMessage } from "react-intl";
import "./index.less";

type TTabsData = {
    contentData: {
        address: React$Element<string>,
        email: React$Element<string>,
        phone: React$Element<string>,
    },
    title: React$Element<string>,
};

type TTabsDataList = Array<TTabsData>;

const dataList: TTabsDataList = new Array(3).fill("").map((item, i) => {
    const id = i + 1;

    return {
        contentData: {
            address: <FormattedMessage id={"common.address.address" + id} />,
            email: <FormattedMessage id={"common.email.email" + id} />,
            phone: <FormattedMessage id={"common.phone.phone" + id} />,
        },
        title: <FormattedMessage id={`footer.tabs.tab${id}.title`} />,
    };
});

export const TabsSection = (): React$Node => {
    const [activeTabIndex, setActiveTabIndex] = useState(0);

    const onClickTab = useCallback((e) => {
        const { id } = e.target.dataset;

        setActiveTabIndex(Number(id));
    }, []);

    const tabsList = useMemo(() => {
        return dataList.map(({ title }: TTabsData, i) => {
            return (
                <Tab
                    data-id={i}
                    isActive={activeTabIndex === i}
                    key={getRandomString()}
                    onClick={onClickTab}
                    type="button"
                >
                    {title}
                </Tab>
            );
        });
    }, [activeTabIndex, onClickTab]);

    const contentList = useMemo(() => {
        return dataList.map(({ contentData }: TTabsData, i) => {
            const { address, email, phone } = contentData;

            return (
                <TabContentItem
                    address={address}
                    data-id={i}
                    email={email}
                    isActive={activeTabIndex === i}
                    key={getRandomString()}
                    phone={phone}
                />
            );
        });
    }, [activeTabIndex]);

    return (
        <div className="modules-layout-footer-tabs-section">
            <div className="modules-layout-footer-tabs-section__tabs-container">
                {tabsList}
            </div>
            <div className="modules-layout-footer-tabs-section__content-container">
                {contentList}
            </div>
        </div>
    );
};
