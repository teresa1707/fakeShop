import { object } from 'prop-types'
import React from 'react'
import './CartHeader.scss'
import { keys } from 'lodash'
import productsArray, { getProductsObject } from 'utils/productsArray'

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

            <div>
                Total:{' '}
                {keys(productsInCart).reduce(
                    (total, productId) =>
                        total +
                        productsInCart[productId] *
                            productsObject[productId].price,
                    0
                )}{' '}
                $
            </div>
        </div>
    )
}
