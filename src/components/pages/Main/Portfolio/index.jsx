// @flow
import { Button } from 'common/Button'
import React from 'react'
import './index.less'

export const Portfolio = () => {
    return (
        <div className='main-portfolio'>
            <h2>Portfolio</h2>
            <div className='main-portfolio__image-section'>
                <div className='main-portfolio__image-container'>
                    <img className='main-portfolio__image-main' src="src/img/main/portfolio/main.jpg" alt="House"/>
                    <img className='main-portfolio__image-secondary main-portfolio__image-secondary_left-top' src="src/img/main/portfolio/secondary-lt.jpg" alt="Room"/>
                    <img className='main-portfolio__image-secondary main-portfolio__image-secondary_right-top' src="src/img/main/portfolio/secondary-rt.jpg" alt="Room"/>
                    <img className='main-portfolio__image-secondary main-portfolio__image-secondary_left-bottom' src="src/img/main/portfolio/secondary-lb.jpg" alt="Room"/>
                    <img className='main-portfolio__image-secondary main-portfolio__image-secondary_right-bottom' src="src/img/main/portfolio/secondary-rb.jpg" alt="Room"/>
                </div>
            </div>
            <div>
                <Button theme='white'>portfolio</Button>
            </div>
        </div>
    )
}
