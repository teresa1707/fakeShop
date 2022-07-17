import { Grid, Typography } from '@mui/material'
import React from 'react'
import { ProductListItem } from './ProductListItem'

export const ProductsList = () => {
    return (
        <>
            <Typography
                variant="h4"
                align="center"
                style={{
                    paddingBottom: 10,
                    margin: '40px 0',
                    textTransform: 'uppercase',
                }}
            >
                Products List
            </Typography>
            <Grid
                container
                spacing={3}
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <Grid item sm={6} md={4}>
                    <ProductListItem
                        name="iPhone XS"
                        description="This is iPhone XS"
                        type="phone"
                        capacity="64"
                        price="500"
                    />
                </Grid>
                <Grid item sm={6} md={4}>
                    <ProductListItem />
                </Grid>
                <Grid item sm={6} md={4}>
                    <ProductListItem />
                </Grid>
            </Grid>
        </>
    )
}
