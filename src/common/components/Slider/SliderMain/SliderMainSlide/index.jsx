// @flow
import { Button } from 'common/components/Button'
import React from 'react'
import './index.less'

type TProps = {
    buttonText?: string,
    description: string,
    imgAlt: string,
    imgSrc: string,
    onClick?: () => void,
    title: string,
}

export const SliderMainSlide = ({ buttonText, description, imgAlt, imgSrc, onClick, title }: TProps) => {
    return (
        <div className='slider-main-slide'>
            <div className='slider-main-slide__image-section'>
                <img className='slider-main-slide__image' src={imgSrc} alt={imgAlt} />
            </div>
            <div className='slider-main-slide__content-section'>
                <div className='slider-main-slide__content'>
                    <h1 className='slider-main-slide__content-header'>{title}</h1>
                    <p className='slider-main-slide__content-description'>{description}</p>
                    { buttonText
                        ? (
                            <div className='slider-main-slide__button-container'>
                                <Button onClick={onClick}>{buttonText}</Button>
                            </div>
                        )
                        : null
                    }
                </div>
            </div>
        </div>
    )
}
