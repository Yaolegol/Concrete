// @flow
import { CartLink } from 'common/Link/CartLink'
import { Logo } from 'common/Logo'
import { Menu } from 'common/Menu'
import { Socials } from 'common/Socials'
import React from 'react'
import './index.less'

export const Header = (): React$Node => {
    return (
        <div className='header'>
            <Logo />
            <Socials className='header__socials' />
            <Menu />
            <CartLink />
        </div>
    )
}
