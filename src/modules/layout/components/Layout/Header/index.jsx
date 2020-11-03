// @flow
import { CartLink } from 'common/components/Link/CartLink'
import { Logo } from 'common/components/Logo'
import { Menu } from 'common/components/Menu'
import { Socials } from 'common/components/Socials'
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
