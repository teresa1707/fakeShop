import { Container } from '@mui/material'
import { ProductsList } from 'components/Products/ProductsList'
import React from 'react'

export const Main = ({ cartData, addProductToCart }) => {
    return (
        <>
            <Container>
                <ProductsList
                    cartData={cartData}
                    addProductToCart={addProductToCart}
                />
            </Container>
        </>
    )
}
