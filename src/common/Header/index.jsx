// @flow
import { Logo } from 'common/Logo'
import { Socials } from 'common/Socials'
import React from 'react'
import './index.less'

export const Header = (): React$Node => {
    return (
        <div className='header'>
            <Logo />
            <Socials />
        </div>
    )
}
