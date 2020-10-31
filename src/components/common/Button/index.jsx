// @flow
import React from 'react'
import './index.less'

type TProps = {
    children: string
}

export const Button = ({ children, ...rest }: TProps): React$Node => {
    return (
        <button className='button' {...rest}>{children}</button>
    )
}
