import React from 'react'
import { Link } from 'react-router-dom'
import { CartTotal } from 'components/Cart/CartTotal'
import { CartProductList } from 'components/Cart/CartProductList'
import { Button, Grid } from '@mui/material'
import { CartProductListItemExtended } from 'components/Cart/CartProductListItemExtended'
import { useSelector } from 'react-redux'

export const CartPage = () => {
    const productsInCart = useSelector(({ productsInCart }) => productsInCart)
    return (
        <>
            <h1>Cart Page</h1>
            <Grid container spacing={4} className="cartHeader">
                <CartProductList
                    productsInCart={productsInCart}
                    CartItem={CartProductListItemExtended}
                />
            </Grid>
            <CartTotal productsInCart={productsInCart} />
            <br />
            <Button variant="contained">
                <Link
                    to="/checkout"
                    style={{ textDecoration: 'none', color: 'white' }}
                >
                    Proceed to checkout
                </Link>
            </Button>
        </>
    )
}
