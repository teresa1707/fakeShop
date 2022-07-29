import { Button, Card, CardContent, Grid } from '@mui/material'
import React from 'react'
import './CartProductListExtended.scss'
import DeleteIcon from '@mui/icons-material/Delete'
import { Quantity } from 'components/Quantity/Quantity'

export const CartProductListItemExtended = ({
    product,
    productCount,
    removeProductFromCart,
}) => {
    return (
        <Grid item xs={12} sm={6}>
            <Card className="cart-product-extended">
                <div>
                    <img
                        src={product.image}
                        alt={product.name}
                        className="media"
                    />
                </div>
                <CardContent>
                    <div>{product.name}</div>
                    <p>Price for one item : {product.price}</p>
                    <p>Count: {productCount}</p>
                    <Quantity count={productCount} />
                    <br />
                    <Button
                        onClick={() => removeProductFromCart(product.id)}
                        variant="outlined"
                    >
                        <DeleteIcon />
                    </Button>
                </CardContent>
            </Card>
        </Grid>
    )
}
