// @flow
import React from 'react'
import './index.less'

export const Logo = (): React$Node => {
    return (
        <a className='logo' href="/">
            <img className='logo__img' src="src/img/main/header/logo.jpg" alt="Logo"/>
        </a>
    )
}
