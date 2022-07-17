import { Button, Card, CardActions, CardContent } from '@mui/material'
import React from 'react'
import './ProductListItem.scss'

export const ProductListItem = (props) => {
    return (
        <>
            <Card>
                <CardContent>
                    <h4>{props.name}</h4>
                    <p>This is {props.name}</p>
                    <div>Type: {props.type}</div>
                    <div>Capacity: {props.capacity}</div>
                    <div>{props.price} $</div>
                </CardContent>
                <CardActions className="add-to-cart-block">
                    <Button variant="contained">Add to cart</Button>
                </CardActions>
            </Card>
        </>
    )
}
