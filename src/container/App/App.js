import React, { useState } from 'react'
import { Footer } from 'container/Footer/Footer'
import { Header } from 'container/Header/Header'
import { Main } from 'container/Main/Main'
import { CssBaseline } from '@mui/material'

export const App = () => {
    const [productsInCart, setProductsInCart] = useState({ 1: 0, 2: 0 })

    const addProductToCart = (productId, count) => {
        setProductsInCart((prevState) =>
            Object.assign({}, prevState, {
                [productId]: prevState[productId] + count,
            })
        )
    }

    return (
        <>
            <CssBaseline />
            <Header productsInCart={productsInCart} />
            <Main addProductToCart={addProductToCart} />
            <Footer />
        </>
    )
}
