// @flow
import React from 'react'
import { Link } from 'react-router-dom'
import './index.less'

export const Logo = (): React$Node => {
    return (
        <Link className='logo' to="/">
            <img className='logo__img' src="src/img/main/header/logo.jpg" alt="Logo"/>
        </Link>
    )
}
