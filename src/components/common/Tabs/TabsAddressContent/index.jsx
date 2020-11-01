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

export const TabsAddressContent = ({ address, className, email, isActive, phone }: TProps): React$Node => {
    return (
        <div className={cn('tabs-content', isActive ? 'tabs-content_active' : null, className)}>
            <div className='tabs-content__item'>
                <MapMarkerIcon className='tabs-content__item-icon' />
                <p className='tabs-content__item-text'>{address}</p>
            </div>
            <div className='tabs-content__item'>
                <PhoneIcon className='tabs-content__item-icon' />
                <p className='tabs-content__item-text'>{phone}</p>
            </div>
            <div className='tabs-content__item'>
                <EmailIcon className='tabs-content__item-icon' />
                <p className='tabs-content__item-text'>{email}</p>
            </div>
        </div>
    )
}
