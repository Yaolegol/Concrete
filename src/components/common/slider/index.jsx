// @flow
import { getRandomString } from 'helpers/random'
import React, { useMemo } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.less'
import './index.less'

type TProps = {
    children: React$Node,
    slidesPerView?: number,
    spaceBetween?: number,
}

export const Slider = ({ children, slidesPerView = 1, spaceBetween = 50 }: TProps): React$Node => {
    const slides = useMemo(() => {
        return children.map((item) => {
            return (
                <SwiperSlide key={getRandomString()}>
                    <div className='slider__slide'>
                        {item}
                    </div>
                </SwiperSlide>
            )
        })
    }, [children])

    return (
        <div className='slider'>
            <Swiper
                spaceBetween={spaceBetween}
                slidesPerView={slidesPerView}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {slides}
            </Swiper>
        </div>
    )
}