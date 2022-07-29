import React from 'react'
import productsArray, { getProductsObject } from 'utils/productsArray'
import { CartTotal } from 'components/Cart/CartTotal'
import { CartProductList } from 'components/Cart/CartProductList'
import { Grid } from '@mui/material'
import { CartProductListItemExtended } from 'components/Cart/CartProductListItemExtended'

export const CartPage = ({
    productsInCart,
    productsObject = getProductsObject(productsArray),
    removeProductFromCart,
}) => {
    return (
        <>
            <h1>Cart Page</h1>
            <Grid container spacing={4} className="cartHeader">
                <CartProductList
                    productsInCart={productsInCart}
                    CartItem={CartProductListItemExtended}
                    removeProductFromCart={removeProductFromCart}
                />
            </Grid>
            <CartTotal productsInCart={productsInCart} />
        </>
    )
}
