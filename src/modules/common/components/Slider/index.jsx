// @flow
import { getRandomString } from 'common/helpers/random'
import React, { useMemo } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.less'
import './index.less'

type TProps = {
    children: React$Node,
    slidesPerView?: number,
    spaceBetween?: number,
}

export const Slider = ({ children, slidesPerView = 1, spaceBetween = 0, ...rest }: TProps): React$Node => {
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
                {...rest}
            >
                {slides}
            </Swiper>
        </div>
    )
}
