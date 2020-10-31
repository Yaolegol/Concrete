// @flow
import { SliderMainSlide } from 'common/Slider/SliderMain/SliderMainSlide'
import ArrowIcon from 'img/arrow-right.svg'
import { Slider } from 'common/Slider'
import React, { useState } from 'react'
import './index.less'

export const SliderMain = () => {
    const [swiper, setSwiper] = useState()

    return (
        <div className='slider-main'>
            <Slider onSwiper={setSwiper}>
                <SliderMainSlide
                    buttonText='shop now'
                    description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto eligendi expedita illum ipsum nobis omnis quaerat quas saepe tempora voluptas?'
                    imgAlt="Hero"
                    imgSrc="src/img/main/header/hero.jpg"
                    onClick={() => console.log('click')}
                    title='Concrete furniture'
                />
                <SliderMainSlide
                    description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto eligendi expedita illum ipsum nobis omnis quaerat quas saepe tempora voluptas?'
                    imgAlt="Hero"
                    imgSrc="src/img/main/header/hero.jpg"
                    title='Concrete furniture'
                />
                <SliderMainSlide
                    buttonText='shop now'
                    description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto eligendi expedita illum ipsum nobis omnis quaerat quas saepe tempora voluptas?'
                    imgAlt="Hero"
                    imgSrc="src/img/main/header/hero.jpg"
                    onClick={() => console.log('click')}
                    title='Concrete furniture'
                />
            </Slider>
            <div className='slider-main__controls'>
                <button className='slider-main__control-button'>
                    <ArrowIcon className='slider-main__control-icon slider-main__control-icon_left' />
                </button>
                <button className='slider-main__control-button'>
                    <ArrowIcon className='slider-main__control-icon' />
                </button>
            </div>
        </div>
    )
}
