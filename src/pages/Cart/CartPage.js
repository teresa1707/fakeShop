import React from 'react'
import { keys } from 'lodash'
import productsArray from 'utils/productsArray'

const productsObject = productsArray.reduce(
    (obj, product) => ({
        ...obj,
        [product.id]: product,
    }),
    {}
)

export const CartPage = ({ productsInCart }) => {
    return (
        <div className="cartHeader">
            <div>
                {keys(productsInCart).map((productId) => (
                    <div key={productId}>
                        {productsObject[productId].name}:
                        {productsInCart[productId]}:
                        {productsObject[productId].price}
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
