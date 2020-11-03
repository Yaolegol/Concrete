// @flow
import { CustomLink } from 'common/components/Link'
import React from 'react'
import './index.less'

export const Description = () => {
    return (
        <div className='main-description'>
            <div className='main-description__content-section'>
                <div className='main-description__content'>
                    <h3 className='main-description__content-title'>MADE WITH A SOUL</h3>
                    <p className='main-description__content-description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda doloribus dolorum error fugit itaque iure nemo praesentium quam qui quisquam.</p>
                    <div className='main-description__about-link-container'>
                        <CustomLink url='/about'>Learn more about us</CustomLink>
                    </div>
                </div>
            </div>
            <div className='main-description__image-section'>
                <div className='main-description__image-container'>
                    <img className='main-description__image-main' src="src/img/main/description/room.jpg" alt="Room"/>
                    <img className='main-description__image-second' src="src/img/main/description/table.jpg" alt="Table"/>
                </div>
            </div>
        </div>
    )
}
