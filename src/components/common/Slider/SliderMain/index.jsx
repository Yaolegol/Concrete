// @flow
import { SliderMainSlide } from 'common/Slider/SliderMain/SliderMainSlide'
import { Slider } from 'common/Slider'
import React from 'react'

export const SliderMain = () => {
    return (
        <Slider>
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
    )
}
