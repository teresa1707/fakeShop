import React from 'react'
import './CartHeader.scss'

import { CartTotal } from './CartTotal'

import { useSelector } from 'react-redux'

export const CartHeader = () => {
    const productsInCart = useSelector(({ productsInCart }) => productsInCart)

    return (
        <div className="cartHeader">
            <CartTotal productsInCart={productsInCart} />
        </div>
    )
}
