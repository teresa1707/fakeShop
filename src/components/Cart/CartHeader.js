import React from 'react'
import './CartHeader.scss'

import { CartTotal } from './CartTotal'
import { CartProductList } from './CartProductList'
import { useSelector } from 'react-redux'

export const CartHeader = ({}) => {
    const productsInCart = useSelector(({ productsInCart }) => productsInCart)

    return (
        <div className="cartHeader">
            <CartProductList productsInCart={productsInCart} />

            <CartTotal productsInCart={productsInCart} />
        </div>
    )
}
