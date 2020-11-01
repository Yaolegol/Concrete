// @flow
import cn from 'classnames'
import EmailIcon from 'img/email.svg'
import MapMarkerIcon from 'img/map-marker.svg'
import PhoneIcon from 'img/phone.svg'
import React from 'react'
import './index.less'

type TProps = {
    address: string,
    className?: string,
    email: string,
    isActive?: boolean,
    phone: string,
}

export const Content = ({ address, className, email, isActive, phone }: TProps): React$Node => {
    return (
        <div className={cn('tabs__content', isActive ? 'tabs__content_active' : null, className)}>
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
    )
}
