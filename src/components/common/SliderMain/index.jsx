// @flow
import { Slider } from 'common/Slider'
import React from 'react'
import './index.less'

export const SliderMain = () => {
    return (
        <div className='slider-main'>
            <Slider>
                <div className='slider-main__slide'>
                    <div className='slider-main__image-section'>
                        <img className='slider-main__image' src="src/img/main/header/hero.jpg" alt="Hero" />
                    </div>
                    <div className='slider-main__content-section'>
                        <h1 className='slider-main__content-header'>Concrete furniture</h1>
                    </div>
                </div>
                <div className='slider-main__slide'>test2</div>
                <div className='slider-main__slide'>test3</div>
            </Slider>
        </div>
    )
}
