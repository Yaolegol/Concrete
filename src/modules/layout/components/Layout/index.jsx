// @flow
import { Footer } from 'layout/components/Layout/Footer'
import { Header } from 'layout/components/Layout/Header'
import MobileMenu from 'common/components/Menu/MobileMenu'
import React, { useMemo } from 'react'
import './index.less'

type TProps = {
    children: React$Node,
    hero?: React$Node,
}

export const Layout = ({ children, hero }: TProps): React$Node => {
    const heroSection = useMemo(() => {
        return hero
            ? (
                <div className='layout__hero'>
                    {hero}
                </div>
            )
            : null
    }, [hero])

    return (
        <div className='layout'>
            <MobileMenu />
            <Header />
            <div className='layout__content'>
                {heroSection}
                {children}
                <Footer />
            </div>
        </div>
    )
}
