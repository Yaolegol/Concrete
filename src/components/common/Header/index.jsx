// @flow
import { CartLink } from 'components/common/CartLink'
import { Logo } from 'components/common/Logo'
import { Menu } from 'components/common/Menu'
import { Socials } from 'components/common/Socials'
import React from 'react'
import './index.less'

export const Header = (): React$Node => {
    return (
        <div className='header'>
            <Logo />
            <Socials />
            <Menu />
            <CartLink />
        </div>
    )
}
