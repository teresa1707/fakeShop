import { object } from 'prop-types'
import React from 'react'
import './CartHeader.scss'
import { keys } from 'lodash'
import productsArray from 'utils/productsArray'

const productsObject = productsArray.reduce(
    (obj, product) => ({
        ...obj,
        [product.id]: product,
    }),
    {}
)

export const CartHeader = ({ productsInCart }) => {
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
