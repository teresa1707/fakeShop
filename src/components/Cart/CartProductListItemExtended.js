import { Card, CardContent, Grid } from '@mui/material'
import React from 'react'
import './CartProductListExtended.scss'

export const CartProductListItemExtended = ({ product, productCount }) => {
    return (
        <Grid item xs={12} sm={6}>
            <Card className="cart-product-extended">
                <div>
                    <img src={product.image} alt={product.name} />
                </div>
                <CardContent>
                    <div>{product.name}</div>
                    <p>Price for one item : {product.price}</p>
                    <div>Count: {productCount}</div>
                </CardContent>
            </Card>
        </Grid>
    )
}
