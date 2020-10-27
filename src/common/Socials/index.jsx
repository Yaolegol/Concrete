// @flow
import React from 'react'
import './index.less'

export const Socials = (): React$Node => {
    return (
        <div className='socials'>
            <a className='socials__link' href="#">
                <img src="src/img/main/header/social/facebook.png" alt="Facebook"/>
            </a>
            <a className='socials__link' href="#">
                <img src="src/img/main/header/social/vk.png" alt="Vk"/>
            </a>
            <a className='socials__link' href="#">
                <img src="src/img/main/header/social/instagram.png" alt="Instagram"/>
            </a>
            <a className='socials__link' href="#">
                <img src="src/img/main/header/social/youtube.png" alt="Youtube"/>
            </a>
        </div>
    )
}
