// @flow
import cn from 'classnames'
import React from 'react'
import './index.less'

type TProps = {
    children: string,
    className?: string,
}

export const Tab = ({ children, className, ...rest }: TProps): React$Node => <button className={cn('tab', className)} {...rest}>{children}</button>
