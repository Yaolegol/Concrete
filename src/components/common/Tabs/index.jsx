// @flow
import cn from 'classnames'
import { Tab } from 'common/Tabs/Tab'
import EmailIcon from 'img/email.svg'
import MapMarkerIcon from 'img/map-marker.svg'
import PhoneIcon from 'img/phone.svg'
import React, { useState, useMemo, useCallback } from 'react'
import './index.less'

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
            return <div className={cn('tabs__content', id === activeTab ? 'tabs__content_active' : null)} key={id}>
                <div className='tabs__content-item'>
                    <MapMarkerIcon className='tabs__content-item-icon' />
                    <p className='tabs__content-item-text'>{address}</p>
                </div>
                <div className='tabs__content-item'>
                    <PhoneIcon className='tabs__content-item-icon' />
                    <p className='tabs__content-item-text'>{phone}</p>
                </div>
                <div className='tabs__content-item'>
                    <EmailIcon className='tabs__content-item-icon' />
                    <p className='tabs__content-item-text'>{email}</p>
                </div>
            </div>
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
