import React from 'react'
import { keys } from 'lodash'
import productsArray, { getProductsObject } from 'utils/productsArray'

export const CartTotal = ({
    productsInCart,
    productsObject = getProductsObject(productsArray),
}) => {
    return (
        <div>
            Total:{' '}
            {keys(productsInCart).reduce(
                (total, productId) =>
                    total +
                    productsInCart[productId] * productsObject[productId].price,
                0
            )}{' '}
            $
        </div>
    )
}
