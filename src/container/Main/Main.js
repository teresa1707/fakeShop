import { Container } from '@mui/material'
import { ProductsList } from 'components/Products/ProductsList'
import React from 'react'
import { Routes, Route } from 'react-router-dom'

export const Main = ({ cartData, addProductToCart }) => {
    return (
        <>
            <Container>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <ProductsList addProductToCart={addProductToCart} />
                        }
                    />
                </Routes>
            </Container>
        </>
    )
}
