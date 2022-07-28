import React from 'react'
import { keys } from 'lodash'
import productsArray, { getProductsObject } from 'utils/productsArray'
import { CartTotal } from 'components/Cart/CartTotal'

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

            <CartTotal productsInCart={productsInCart} />
        </div>
    )
}
