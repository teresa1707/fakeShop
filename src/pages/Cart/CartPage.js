import React from 'react'
import { keys } from 'lodash'
import productsArray, { getProductsObject } from 'utils/productsArray'

export const CartPage = ({
    productsInCart,
    productsObject = getProductsObject(productsArray),
}) => {
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
