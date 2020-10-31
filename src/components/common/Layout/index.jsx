// @flow
import { Header } from 'components/common/Layout/Header'
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
            <Header />
            <div className='layout__content'>
                {heroSection}
                {children}
                <div className='layout__footer'>footer</div>
            </div>
        </div>
    )
}
