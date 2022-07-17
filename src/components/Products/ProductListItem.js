import { Button, Card, CardActions, CardContent } from '@mui/material'
import React from 'react'
import './ProductListItem.scss'

export const ProductListItem = ({
    image,
    name,
    description,
    type,
    capacity,
    price,
}) => {
    return (
        <>
            <Card>
                <CardContent>
                    <div className="product-image">
                        <img src={image} alt="" />
                    </div>
                    <h2>{name}</h2>
                    <p className="product-description">{description}</p>
                    <div className="product-features">
                        <span>Type : </span>
                        {type}
                    </div>
                    <div className="product-features">
                        <span>Capacity : </span>
                        {capacity}Gb
                    </div>
                    <div className="product-price">{price} $</div>
                </CardContent>
                <CardActions className="add-to-cart-block">
                    <Button variant="contained">Add to cart</Button>
                </CardActions>
            </Card>
        </>
    )
}
