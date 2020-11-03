// @flow
import { Slider } from 'common/components/Slider'
import React from 'react'
import './index.less'

export const Hero = () => {
    return (
        <div className='hero'>
            <Slider>
                <div>test1</div>
                <div>test2</div>
                <div>test3</div>
            </Slider>
        </div>
    )
}
