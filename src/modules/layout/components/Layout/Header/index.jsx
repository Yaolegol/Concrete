// @flow
import { CartLink } from 'common/components/Link/CartLink'
import { Logo } from 'common/components/Logo'
import { Menu } from 'common/components/Menu'
import { BurgerButton } from 'common/components/Menu/BurgerButton'
import { Socials } from 'common/components/Socials'
import React from 'react'
import './index.less'

export const Header = (): React$Node => {
    return (
        <div className='header'>
            <BurgerButton className='header__burger-button'/>
            <Logo />
            <Socials className='header__socials' />
            <Menu />
            <CartLink />
        </div>
    )
}
