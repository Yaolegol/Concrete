// @flow
import { Button } from 'common/components/Button'
import React from 'react'
import './index.less'

export const Portfolio = () => {
    return (
        <div className='main-portfolio'>
            <h3>Portfolio</h3>
            <div className='main-portfolio__image-section'>
                <div className='main-portfolio__image-container'>
                    <img className='main-portfolio__image-main' src="src/img/main/portfolio/main.jpg" alt="House"/>
                    <div className='main-portfolio__secondary-images-container'>
                        <img className='main-portfolio__image-secondary main-portfolio__image-secondary_left-top' src="src/img/main/portfolio/secondary-lt.jpg" alt="Room"/>
                        <img className='main-portfolio__image-secondary main-portfolio__image-secondary_right-top' src="src/img/main/portfolio/secondary-rt.jpg" alt="Room"/>
                        <img className='main-portfolio__image-secondary main-portfolio__image-secondary_left-bottom' src="src/img/main/portfolio/secondary-lb.jpg" alt="Room"/>
                        <img className='main-portfolio__image-secondary main-portfolio__image-secondary_right-bottom' src="src/img/main/portfolio/secondary-rb.jpg" alt="Room"/>
                    </div>
                </div>
            </div>
            <div className='main-portfolio__button-container'>
                <Button theme='white'>portfolio</Button>
            </div>
        </div>
    )
}