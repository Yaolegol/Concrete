// @flow
import cn from 'classnames'
import React from 'react'
import './index.less'

type TProps = {
    children: string,
    theme?: 'white',
    type?: string
}

export const Button = ({ children, theme, type = 'button', ...rest }: TProps): React$Node => {
    return (
        <button className={cn('button', { [`button_${theme}`]: theme })} type={type} {...rest}>{children}</button>
    )
}
