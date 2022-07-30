import React, { useState } from 'react'
import { Footer } from 'container/Footer/Footer'
import { Header } from 'container/Header/Header'
import { Main } from 'container/Main/Main'
import { CssBaseline } from '@mui/material'
import { omit } from 'lodash'

export const App = () => {
    const [productsInCart, setProductsInCart] = useState({ 1: 0, 2: 0 })
    const [productsLikeState, setProductsLikeState] = useState({
        1: true,
        2: true,
    })

    // const addProductToCart = (productId, count) => {
    //     setProductsInCart((prevState) =>
    //         Object.assign({}, prevState, {
    //             [productId]: (prevState[productId] || 0) + count,
    //         })
    //     )
    // }
    const addProductToCart = (productId, count) => {
        setProductsInCart((prevState) => ({
            ...prevState,
            [productId]: (prevState[productId] || 0) + count,
        }))
    }

    // const removeProductFromCart = (productId) => {
    //     setProductsInCart((prevState) => {
    //         let prevProductsInCart = { ...prevState }
    //         delete prevProductsInCart[productsId]
    //         return prevProductsInCart
    //     })
    // }

    const removeProductFromCart = (productId) => {
        setProductsInCart((prevState) => omit(prevState, productId))
    }

    const changeProductQuantity = (productId, quantity) => {
        setProductsInCart((prevState) => ({
            ...prevState,
            [productId]: quantity,
        }))
    }

    return (
        <>
            <CssBaseline />
            <Header productsInCart={productsInCart} />
            <Main
                addProductToCart={addProductToCart}
                productsInCart={productsInCart}
                removeProductFromCart={removeProductFromCart}
                changeProductQuantity={changeProductQuantity}
            />
            <Footer />
        </>
    )
}
