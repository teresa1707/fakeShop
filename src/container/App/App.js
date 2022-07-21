import React, { useState } from 'react'
import { Footer } from 'container/Footer/Footer'
import { Header } from 'container/Header/Header'
import { Main } from 'container/Main/Main'
import { CssBaseline } from '@mui/material'

export const App = () => {
    const [cartData, setCartData] = useState({ count: 0, price: 0 })

    const addProductToCart = (count, price) => {
        setCartData((prevState) => ({
            count: prevState.count + count,
            price: prevState.price + price,
        }))
    }

    return (
        <>
            <CssBaseline />
            <Header cartData={cartData} />
            <Main cartData={cartData} addProductToCart={addProductToCart} />
            <Footer />
        </>
    )
}
