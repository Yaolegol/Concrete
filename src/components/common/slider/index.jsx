// @flow
import React, { useMemo } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.less'
// import style from './index.module.less'

type TProps = {
    children: React$Node,
    slidesPerView?: number,
    spaceBetween?: number,
}

export const Slider = ({ children, slidesPerView = 1, spaceBetween = 50 }: TProps): React$Node => {
    const slides = useMemo(() => {
        return children.map((item) => {
            return (
                <SwiperSlide key={new Date()}>
                    {item}
                </SwiperSlide>
            )
        })
    }, [children])

    return (
        <Swiper
            spaceBetween={spaceBetween}
            slidesPerView={slidesPerView}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {slides}
        </Swiper>
    )
}
