// @flow
import { TabsTab } from 'common/Tabs/TabsTab'
import React, { useState, useMemo, useCallback } from 'react'
import './index.less'

type TProps = {
    activeTabId: number,
    content: Array<{ id: number, data: { address: string, email: string, phone: string, } }>,
    contentComponent: React$Node,
    tabs: Array<{ id: number, name: string, }>
}

export const Tabs = ({ activeTabId, content, contentComponent: ContentComponent, tabs }: TProps): React$Node => {
    const [activeTab, setActiveTab] = useState(activeTabId)

    const onClickTab = useCallback((e) => {
        const { id } = e.target.dataset
        setActiveTab(Number(id))
    }, [])

    const _content = useMemo(() => {
        return content.map(({ id, data }) => {
            return <ContentComponent isActive={id === activeTab} key={id} {...data} />
        })
    }, [activeTab, content])

    const _tabs = useMemo(() => {
        return tabs.map(({ id, name }) => {
            return <TabsTab data-id={id} isActive={id === activeTab} key={id} onClick={onClickTab}>{name}</TabsTab>
        })
    }, [activeTab, onClickTab, tabs])

    return (
        <div className='tabs'>
            <div className='tabs__menu-container'>{_tabs}</div>
            <div className='tabs__content-container'>{_content}</div>
        </div>
    )
}
