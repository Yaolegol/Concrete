// @flow
import React from 'react'
import './index.less'

type TProps = {
    children: string
}

export const MenuItem = ({ children }: TProps): React$Node => <span className='menu-item'>{children}</span>
