// @flow
import cn from 'classnames'
import React from 'react'
import './index.less'

type TProps = {
    children: string,
    className?: string,
    isActive?: boolean
}

export const TabsTab = ({ children, className, isActive, ...rest }: TProps): React$Node => {
    return <button className={cn('tabs-tab', isActive ? 'tabs-tab_active' : null, className)} {...rest}>{children}</button>
}
