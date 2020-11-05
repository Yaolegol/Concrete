// @flow
import { TabsAddressContent } from 'common/components/Tabs/TabsAddressContent'
import { GoogleMap } from 'common/components/GoogleMap'
import { Tabs } from 'common/components/Tabs'
import React from 'react'
import './index.less'

const _tabs = [
    {
        id: 1,
        name: 'test1'
    },
    {
        id: 2,
        name: 'test2'
    },
    {
        id: 3,
        name: 'test3'
    }
]

const tabsContent = [
    {
        id: 1,
        data: {
            address: 'address1',
            email: 'email1',
            phone: 'phone1'
        }
    },
    {
        id: 2,
        data: {
            address: 'address2',
            email: 'email2',
            phone: 'phone2'
        }
    },
    {
        id: 3,
        data: {
            address: 'address3',
            email: 'email3',
            phone: 'phone3'
        }
    }
]

export const Footer = (): React$Node => {
    return (
        <div className='footer'>
            <h3>contacts</h3>
            <div className='footer__content-section'>
                <div className='footer__map-container'>
                    <GoogleMap />
                </div>
                <div className='footer__content-container'>
                    <Tabs
                        activeTabId={1}
                        content={tabsContent}
                        contentComponent={TabsAddressContent}
                        tabs={_tabs}/>
                </div>
            </div>
        </div>
    )
}
