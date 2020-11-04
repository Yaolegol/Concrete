// @flow
import React from 'react'
import './index.less'

export const BurgerButton = ({ ...rest }): React$Node => {
    return (
        <button className='burger-button' {...rest}>
            <span className='burger-button__line burger-button__line_without-margin'></span>
            <span className='burger-button__line'></span>
            <span className='burger-button__line'></span>
        </button>
    )
}
