// @flow
import cn from 'classnames'
import React from 'react'
import './index.less'

type TProps = {
    className?: string
}

export const GoogleMap = ({ className }: TProps): React$Node => {
    return (
        <div className='google-map'>
            <iframe
                className={cn('google-map__map', className)}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12702.633288091998!2d37.61538723549686!3d55.7493037397179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a50b315e573%3A0xa886bf5a3d9b2e68!2z0JzQvtGB0LrQvtCy0YHQutC40Lkg0JrRgNC10LzQu9GM!5e0!3m2!1sru!2sru!4v1604230922245!5m2!1sru!2sru" />
        </div>
    )
}
