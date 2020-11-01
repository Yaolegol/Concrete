// @flow
import { GoogleMap } from 'common/GoogleMap'
import React from 'react'
import './index.less'

export const Footer = (): React$Node => {
    return (
        <div className='footer'>
            <h2>contacts</h2>
            <div className='footer__content-section'>
                <div className='footer__map'>
                    <GoogleMap />
                </div>
                <div className='footer__content-container'></div>
            </div>
        </div>
    )
}
