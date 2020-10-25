// @flow
import React from 'react'
import './index.less'

export const Header = (): React$Node => {
    return (
        <div className='header'>
            <img src="src/img/main/header/logo.jpg" alt="Logo"/>
            <div>
                <img src="src/img/main/header/social/facebook.png" alt="Facebook"/>
                <img src="src/img/main/header/social/vk.png" alt="Vk"/>
                <img src="src/img/main/header/social/instagram.png" alt="Instagram"/>
                <img src="src/img/main/header/social/youtube.png" alt="Youtube"/>
            </div>
        </div>
    )
}
