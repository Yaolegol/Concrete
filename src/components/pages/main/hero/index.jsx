// @flow
import React from 'react'
import style from './index.module.less'
import { Slider } from 'common/slider'

export const Hero = () => {
    return (
        <div className={style.hero}>
            <Slider>
                <div>test1</div>
                <div>test2</div>
                <div>test3</div>
            </Slider>
        </div>
    )
}
