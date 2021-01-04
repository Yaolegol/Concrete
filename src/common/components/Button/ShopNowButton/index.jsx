// @flow
import { Button } from 'common/components/Button'
import React from 'react'
import { Link } from 'react-router-dom'

export const ShopNowButton = () => {
    return (
        <Link to="/shop">
            <Button>Shop now</Button>
        </Link>
    )
}
