// @flow
import cn from 'classnames'
import React from 'react'
import './index.less'

type TProps = {
    children: string,
    className?: string,
}

export const MenuItem = ({ children, className, ...rest }: TProps): React$Node => <span className={cn('menu-item', className)} {...rest}>{children}</span>
