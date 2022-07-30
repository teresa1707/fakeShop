import React from 'react'
import { keys } from 'lodash'
import { getProductsObject } from 'utils/productsArray'
import { CartProductListItem } from './CartProductListItem'
import { useSelector } from 'react-redux'

export const CartProductList = ({
    productsInCart,

    CartItem = CartProductListItem,
}) => {
    const prodArray = useSelector((state) => state.products)

    if (prodArray.length === 0) {
        return null
    } else {
        const productsObject = getProductsObject(prodArray)
        return (
            <>
                {keys(productsInCart).map((productId) => (
                    <CartItem
                        key={productId}
                        product={productsObject[productId]}
                        productCount={productsInCart[productId]}
                    />
                ))}
            </>
        )
    }
}
