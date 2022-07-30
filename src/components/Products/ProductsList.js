import { Grid, Typography } from '@mui/material'
import React from 'react'
import { ProductListItem } from './ProductListItem'

import { useSelector } from 'react-redux'

export const ProductsList = () => {
    const prodArray = useSelector((state) => state.products)
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
                {prodArray.map(
                    ({
                        image,
                        name,
                        description,
                        type,
                        capacity,
                        price,
                        id,
                    }) => (
                        <Grid item sm={6} md={4} key={id}>
                            <ProductListItem
                                id={id}
                                image={image}
                                name={name}
                                description={description}
                                type={type}
                                capacity={capacity}
                                price={price}
                            />
                        </Grid>
                    )
                )}
            </Grid>
        </>
    )
}
