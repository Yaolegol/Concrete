// @flow
import cn from 'classnames'
import { Tab } from 'common/Tabs/Tab'
import React, { useState, useMemo, useCallback } from 'react'
import './index.less'
import { Content } from './Content'

type TProps = {
    activeTabId: number,
    content: Array<{ id: number, data: { address: string, email: string, phone: string, } }>,
    tabs: Array<{ id: number, name: string, }>
}

export const Tabs = ({ activeTabId, content, tabs }: TProps): React$Node => {
    const [activeTab, setActiveTab] = useState(activeTabId)

    const onClickTab = useCallback((e) => {
        const { id } = e.target.dataset
        setActiveTab(Number(id))
    }, [])

    const _content = useMemo(() => {
        return content.map(({ id, data: { address, email, phone } }) => {
            return <Content address={address} email={email} isActive={id === activeTab} phone={phone} key={id}/>
        })
    }, [activeTab, content])

    const _tabs = useMemo(() => {
        return tabs.map(({ id, name }) => {
            return <Tab className={cn('tabs__menu-item', id === activeTab ? 'tabs__menu-item_active' : null)} data-id={id} key={id} onClick={onClickTab}>{name}</Tab>
        })
    }, [activeTab, onClickTab, tabs])

    return (
        <div className='tabs'>
            <div className='tabs__menu-container'>{_tabs}</div>
            <div className='tabs__content-container'>{_content}</div>
        </div>
    )
}
