import { object } from 'prop-types'
import React from 'react'
import './CartHeader.scss'
import { keys } from 'lodash'
import productsArray, { getProductsObject } from 'utils/productsArray'
import { CartTotal } from './CartTotal'

export const CartHeader = ({
    productsInCart,
    productsObject = getProductsObject(productsArray),
}) => {
    return (
        <div className="cartHeader">
            <div>
                {keys(productsInCart).map((productId) => (
                    <div key={productId}>
                        {productsObject[productId].name}:
                        {productsInCart[productId]}
                    </div>
                ))}
            </div>

            <CartTotal productsInCart={productsInCart} />
        </div>
    )
}
