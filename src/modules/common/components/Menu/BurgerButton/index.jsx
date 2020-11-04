// @flow
import cn from 'classnames'
import React from 'react'
import './index.less'

type TProps = {
    className?: string
}

export const BurgerButton = ({ className, ...rest }: TProps): React$Node => {
    return (
        <button className={cn('burger-button', className)} {...rest}>
            <span className='burger-button__line burger-button__line_without-margin'></span>
            <span className='burger-button__line'></span>
            <span className='burger-button__line'></span>
        </button>
    )
}
