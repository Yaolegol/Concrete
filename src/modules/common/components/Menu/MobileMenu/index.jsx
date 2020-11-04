// @flow
import cn from 'classnames'
import { selectMobileMenuShowStatus } from 'layout/selectors'
import React from 'react'
import { connect } from 'react-redux'
import './index.less'

type TProps = {
    children: React$Node,
    isShow: boolean,
}

const MobileMenu = ({ children, isShow }: TProps): React$Node => {
    console.log('isShow')
    console.log(isShow)
    return (
        <div className={cn('mobile-menu', isShow ? 'mobile-menu_show' : null)}>
            <div className='mobile-menu__body'>
                {children}
            </div>
        </div>
    )
}

export default connect((state) => ({
    isShow: selectMobileMenuShowStatus(state)
}))(MobileMenu)
