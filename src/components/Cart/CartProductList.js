import React from 'react'
import { keys } from 'lodash'
import productsArray, { getProductsObject } from 'utils/productsArray'
import { CartProductListItem } from './CartProductListItem'

export const CartProductList = ({
    productsInCart,
    productsObject = getProductsObject(productsArray),
    CartItem = CartProductListItem,
    removeProductFromCart,
    changeProductQuantity,
}) => {
    return (
        <>
            {keys(productsInCart).map((productId) => (
                <CartItem
                    key={productId}
                    product={productsObject[productId]}
                    productCount={productsInCart[productId]}
                    removeProductFromCart={removeProductFromCart}
                    changeProductQuantity={changeProductQuantity}
                />
            ))}
        </>
    )
}
