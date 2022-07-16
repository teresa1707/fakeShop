import { Button, Card, CardActions, CardContent } from '@mui/material'
import React from 'react'

export const ProductListItem = () => {
    return (
        <>
            <Card>
                <CardContent>
                    <h4>iPhone XS</h4>
                    <p>This is iPhone XS</p>
                    <div>Type: phone</div>
                    <div>Capacity: 64Gb</div>
                    <div>500 $</div>
                </CardContent>
                <CardActions>
                    <Button>Add to cart</Button>
                </CardActions>
            </Card>
        </>
    )
}
