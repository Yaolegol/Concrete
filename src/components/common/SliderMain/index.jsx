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
                        <div className='slider-main__content'>
                            <h1 className='slider-main__content-header'>Concrete furniture</h1>
                            <p className='slider-main__content-description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto eligendi expedita illum ipsum nobis omnis quaerat quas saepe tempora voluptas?</p>
                        </div>
                    </div>
                </div>
                <div className='slider-main__slide'>test2</div>
                <div className='slider-main__slide'>test3</div>
            </Slider>
        </div>
    )
}
