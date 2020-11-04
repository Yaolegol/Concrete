// @flow
import { CartLink } from 'common/components/Link/CartLink'
import { Logo } from 'common/components/Logo'
import { Menu } from 'common/components/Menu'
import { BurgerButton } from 'common/components/Menu/BurgerButton'
import { Socials } from 'common/components/Socials'
import { actionShowMobileMenu } from 'layout/actions'
import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import './index.less'

export const Header = (): React$Node => {
    const dispatch = useDispatch()

    const showMobileMenu = useCallback(() => {
        dispatch(actionShowMobileMenu(true))
    }, [dispatch])

    return (
        <div className='header'>
            <BurgerButton className='header__burger-button' onClick={showMobileMenu}/>
            <Logo className='header__item_tablet-hidden' />
            <Socials className='header__item_tablet-hidden' />
            <Menu className='header__item_tablet-hidden' />
            <CartLink />
        </div>
    )
}
