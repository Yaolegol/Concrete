// @flow
import { GoogleMap } from 'common/GoogleMap'
import { Tabs } from 'common/Tabs'
import React from 'react'
import './index.less'

export const Footer = (): React$Node => {
    return (
        <div className='footer'>
            <h2>contacts</h2>
            <div className='footer__content-section'>
                <div className='footer__map-container'>
                    <GoogleMap className='footer__map' />
                </div>
                <div className='footer__content-container'>
                    <Tabs
                        activeTabId={1}
                        content={[
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
                        ]}
                        tabs={[
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
                        ]}/>
                </div>
            </div>
        </div>
    )
}
